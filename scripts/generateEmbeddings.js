// IMPORTANTE: Para que este script inserte los documentos en la BBDD, ha de deshabilitarse los permisos de la tabla documents.
// ahora mismo solo se permite Lectura sobre esa tabla. Hay que deshabilitar para que se permita escritura tambien

import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';
import { crawledData } from './data/crawledData.js';
import { extraData } from './data/extraData.js';
import { normalizeText, chunkText, logger } from './utils.js';

// --- Configuración ---
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const googleApiKey = process.env.GOOGLE_API_KEY;

if (!supabaseUrl || !supabaseServiceKey || !googleApiKey) {
  throw new Error('Faltan variables de entorno requeridas.');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const genAI = new GoogleGenerativeAI(googleApiKey);
const embeddingModel = genAI.getGenerativeModel({
  model: 'gemini-embedding-001',
});

// --- Función principal ---
async function generateAndStoreEmbeddings() {
  logger.info('Iniciando generación de embeddings...');

  const { error: deleteError } = await supabase
    .from('documents')
    .delete()
    .neq('id', 0);

  if (deleteError) {
    logger.error('Error al borrar documentos:', deleteError);
    return;
  }

  logger.success('Documentos antiguos eliminados.');

  const allData = [...crawledData, ...extraData];
  logger.info(`Procesando ${allData.length} documentos...`);

  for (const item of allData) {
    if (!item.content || item.content.trim() === '') {
      logger.warn(`Contenido vacío en ${item.url}. Saltando...`);
      continue;
    }

    try {
      const cleanedContent = normalizeText(item.content);
      const chunks = chunkText(cleanedContent);

      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];

        const result = await embeddingModel.embedContent(chunk);
        const embedding = result.embedding.values;

        const documentToInsert = {
          content: chunk,
          metadata: {
            url: item.url,
            title: normalizeText(item.title),
            description: normalizeText(item.description),
            h1: normalizeText(item.h1),
            h2s: Array.isArray(item.h2s)
              ? normalizeText(item.h2s.join(' '))
              : normalizeText(item.h2s),
            h3s: Array.isArray(item.h3s)
              ? normalizeText(item.h3s.join(' '))
              : normalizeText(item.h3s),
            chunk_index: i,
          },
          embedding,
        };

        const { error } = await supabase
          .from('documents')
          .insert(documentToInsert);

        if (error) {
          logger.error(
            `Error insertando chunk ${i} de ${item.url}:`,
            error.message
          );
        } else {
          logger.info(`Chunk ${i} de ${item.url} almacenado con éxito.`);
        }
      }
    } catch (err) {
      logger.error(`Fallo procesando ${item.url}:`, err.message);
    }
  }

  logger.success('Embeddings generados y almacenados correctamente.');
}

generateAndStoreEmbeddings();
