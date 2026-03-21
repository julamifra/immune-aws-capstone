// Este script actualiza el archivo all_urls.js y el sitemap.xml de manera inteligente.
// Si el sitemap no existe o está vacío, lo crea desde cero.
// Si ya existe, solo añade las URLs nuevas que no estén ya presentes.

import fs from 'fs';
import path from 'path';
import { specialtiesData } from '../src/data/specialtiesData.js';
import { createClient } from '@supabase/supabase-js';
import { routePaths } from '../src/config/routes.js';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Error: La URL de Supabase o la Clave Anónima no están definidas en el archivo .env.'
  );
  console.error(
    'Por favor, asegúrate de tener un archivo .env en el directorio raíz con VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.'
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define la URL base de tu sitio web aquí. Dejarlo vacío genera rutas relativas.
const SITE_URL = 'https://ioamigo.com';

/**
 * Obtiene los slugs de todos los artículos de noticias desde la base de datos de Supabase.
 * @returns {Promise<string[]>} Una promesa que se resuelve a un array de rutas URL de noticias.
 */
async function getNewsUrls() {
  console.log('Obteniendo artículos de noticias desde Supabase...');
  const { data, error } = await supabase.from('news_articles').select('slug');

  if (error) {
    console.error(
      '❌ Error obteniendo artículos de noticias en supabase:',
      error
    );
    return [];
  }

  if (!data) {
    console.log('No se encontraron artículos de noticias.');
    return [];
  }

  console.log(` ✅ Se encontraron ${data.length} artículos de noticias.`);
  // Asume que la ruta del blog está definida en routePaths.blog
  return data.map((article) => `${routePaths.blog}/${article.slug}`);
}

/**
 * Genera una lista de todas las URLs únicas para el sitio web.
 */
async function generateAllUrls() {
  const staticPaths = Object.values(routePaths);
  const specialtiesStaticPath = specialtiesData.map(
    (s) => `${routePaths.specialties}/${s.slug}`
  );
  const newsPaths = await getNewsUrls();

  const allPaths = [...staticPaths, ...specialtiesStaticPath, ...newsPaths];

  // Elimina duplicados y filtra las rutas inválidas o vacías
  const uniquePaths = [...new Set(allPaths)].filter((p) => p);

  // Añade la URL del sitio a cada ruta
  const fullUrls = uniquePaths.map((p) => `${SITE_URL}${p}`);

  // Ordena las URLs alfabéticamente por consistencia
  fullUrls.sort();

  return fullUrls;
}

/**
 * Escribe la lista de URLs en el archivo all_urls.js.
 * @param {string[]} urls - El array de URLs a escribir.
 */
function writeUrlsToFile(urls) {
  const outputPath = path.resolve(
    process.cwd(),
    'scripts',
    'data',
    'all_urls.js'
  );
  const fileContent = `// Este archivo es autogenerado por scripts/updateUrlsAndSitemap.js. No editar manualmente.\n\nexport const allUrls = ${JSON.stringify(urls, null, 2)};\n`;

  try {
    fs.writeFileSync(outputPath, fileContent, 'utf8');
    console.log(
      `\n ✅ Se actualizaron exitosamente ${urls.length} URLs en ${outputPath}`
    );
  } catch (error) {
    console.error(' ❌ Error escribiendo en all_urls.js:', error);
  }
}

/**
 * Actualiza inteligentemente el archivo sitemap.xml.
 * - Si el sitemap no existe o está vacío, crea uno nuevo.
 * - Si ya existe, solo añade las URLs nuevas que no estén ya presentes.
 * @param {string[]} urls - El array de URLs completas que deberían estar en el sitemap.
 */
function writeSitemapToFile(urls) {
  console.log('\nActualizando sitemap.xml...');
  const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  const today = new Date().toISOString().split('T')[0];

  // Función de ayuda para generar un sitemap completo desde cero
  const generateNewSitemap = () => {
    const urlEntries = urls
      .map(
        (url) => `
          <url>
            <loc>${url}</loc>
            <lastmod>${today}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
          </url>`
      )
      .join('');

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
                            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
                            </urlset>`;
    fs.writeFileSync(outputPath, sitemapContent.trim(), 'utf8');
    console.log(
      ` ✅ Se generó exitosamente un nuevo sitemap.xml con ${urls.length} URLs.`
    );
  };

  try {
    // Caso 1: El archivo sitemap no existe.
    if (!fs.existsSync(outputPath)) {
      console.log('🔍 sitemap.xml no encontrado. Generando uno nuevo...');
      generateNewSitemap();
      return;
    }

    // Lee el sitemap existente
    const existingSitemap = fs.readFileSync(outputPath, 'utf8');
    const urlsInSitemap = (
      existingSitemap.match(/<loc>(.*?)<\/loc>/g) || []
    ).map((tag) =>
      tag.replace(/<\/?loc>/g, '').replace('https://www.', 'https://')
    );

    // Caso 2: El sitemap existe pero está vacío.
    if (urlsInSitemap.length === 0) {
      console.log(
        '🔍 El sitemap.xml existente está vacío. Generando uno nuevo...'
      );
      generateNewSitemap();
      return;
    }

    // Caso 3: Actualizar el sitemap existente
    const existingUrlSet = new Set(urlsInSitemap);
    console.log(existingUrlSet);

    const newUrlsToAdd = urls
      .map((url) => url.replace('https://www.', 'https://'))
      .filter((url) => !existingUrlSet.has(url));

    if (newUrlsToAdd.length === 0) {
      console.log(
        '\n✨ El sitemap ya está actualizado. No hay nuevas URLs que añadir.'
      );
      return;
    }

    console.log(
      `\n➕ Se encontraron ${newUrlsToAdd.length} nuevas URLs para añadir al sitemap:`
    );
    newUrlsToAdd.forEach((url) => console.log(`  - ${url}`));

    const newUrlEntries = newUrlsToAdd
      .map(
        (url) => `
          <url>
            <loc>${url}</loc>
            <lastmod>${today}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
          </url>`
      )
      .join('');

    // Inserta las nuevas URLs antes de la etiqueta de cierre </urlset>
    const updatedSitemap = existingSitemap.replace(
      '</urlset>',
      `${newUrlEntries}\n</urlset>`
    );

    fs.writeFileSync(outputPath, updatedSitemap.trim(), 'utf8');
    console.log(
      `\n ✅ Se añadieron exitosamente ${newUrlsToAdd.length} nuevas URLs al sitemap.xml.`
    );
  } catch (error) {
    console.error(' ❌ Error actualizando sitemap.xml:', error);
  }
}

/**
 * Actualiza el objeto blogSlugs en src/config/routes.js con los slugs de los artículos de noticias.
 */
async function updateBlogSlugs() {
  console.log('\nActualizando blogSlugs en src/config/routes.js...');
  const blogArticles = await getNewsUrls(); // Esto devuelve rutas completas como '/blog/slug'

  const newBlogSlugs = {};
  blogArticles.forEach((url) => {
    const slug = url.split('/').pop(); // Extrae 'slug' de '/blog/slug'
    const key = slug.replace(/-/g, '_'); // Convierte 'slug-con-guiones' a 'slug_con_guiones'
    newBlogSlugs[key] = url;
  });

  const routesFilePath = path.resolve(
    process.cwd(),
    'src',
    'config',
    'routes.js'
  );
  let routesContent = fs.readFileSync(routesFilePath, 'utf8');

  // Construye la cadena del nuevo objeto blogSlugs
  const newBlogSlugsString = JSON.stringify(newBlogSlugs, null, 2)
    .replace(/"/g, "'") // Reemplaza comillas dobles por simples
    .replace(/'([^']*)':/g, '$1:'); // Elimina comillas de las claves

  // Busca la sección de blogSlugs existente y la reemplaza
  const updatedRoutesContent = routesContent.replace(
    /export const blogSlugs = {[^{}]*};/s,
    `export const blogSlugs = ${newBlogSlugsString};
`
  );

  try {
    fs.writeFileSync(routesFilePath, updatedRoutesContent, 'utf8');
    console.log(
      ' ✅ blogSlugs actualizado exitosamente en src/config/routes.js.'
    );
  } catch (error) {
    console.error(
      ' ❌ Error actualizando blogSlugs en src/config/routes.js:',
      error
    );
  }
}

// Ejecución principal
(async () => {
  // Revisa los argumentos de la línea de comandos
  const args = process.argv.slice(2); // Obtiene los argumentos pasados al script
  const urlsOnly = args.includes('--urls-only');

  try {
    await updateBlogSlugs(); // Llama a la nueva función
    const allUrls = await generateAllUrls();
    writeUrlsToFile(allUrls);

    if (urlsOnly) {
      console.log(
        '\n⏭️  Omitiendo la generación del sitemap por el flag --urls-only.'
      );
    } else {
      writeSitemapToFile(allUrls);
    }
  } catch (error) {
    console.error('\n ❌Ocurrió un error inesperado:', error);
    process.exit(1);
  }
})();
