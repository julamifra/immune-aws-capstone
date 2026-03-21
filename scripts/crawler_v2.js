// Este script rastrea un sitio web, extrae datos de sus páginas y los guarda en un archivo JSON.
// Hace un web scrapind de todas las URLs especificadas y guarda los datos en un archivo JSON.
// el archivho JSON (crawledData.json) se usa luego para crear embeddings y almacenarlos en Supabase (en la tabla documents).

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { allUrls } from './data/all_urls.js';

// const SITE_URL = 'https://www.ioamigo.com';
// const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const MAX_PAGES = 100; // evita crawleos infinitos

async function getUrlsFromSitemap() {
  return allUrls;
}

const visited = new Set();
const queue = [];

function normalizeUrl(url) {
  return url.split('#')[0].split('?')[0];
}

async function crawlSite(startUrls) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const results = [];

  queue.push(...startUrls);

  while (queue.length > 0 && visited.size < MAX_PAGES) {
    console.log(' Visitadas:', visited.size);
    console.log(' Cola:', queue.length);
    const url = queue.shift();
    const normUrl = normalizeUrl(url);

    if (visited.has(normUrl)) continue;
    visited.add(normUrl);

    console.log(`🔎 Visitando: ${normUrl}`);

    try {
      await page.goto(normUrl, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500); // por si hay contenido dinámico

      const data = await page.evaluate(() => {
        const getText = (el) => el?.innerText?.trim() || '';
        const getMeta = (name) =>
          document
            .querySelector(`meta[name="${name}"]`)
            ?.getAttribute('content') ||
          document
            .querySelector(`meta[property="${name}"]`)
            ?.getAttribute('content') ||
          '';

        const links = Array.from(document.querySelectorAll('a'))
          .map((a) => a.href)
          .filter((href) => href.startsWith(window.location.origin));

        return {
          url: window.location.href,
          title: document.title,
          description: getMeta('description'),
          h1: getText(document.querySelector('h1')),
          h2s: Array.from(document.querySelectorAll('h2')).map((h) =>
            getText(h)
          ),
          h3s: Array.from(document.querySelectorAll('h3')).map((h) =>
            getText(h)
          ),
          content: (() => {
            const mainContent = document.querySelector('main');
            if (!mainContent) return getText(document.body); // Fallback por si no hay <main>

            // Clonar el elemento para no modificar el DOM original
            const contentClone = mainContent.cloneNode(true);

            // Selectores de elementos a eliminar
            const selectorsToRemove = [
              'nav',
              'footer',
              'aside',
              'button',
              'form',
              'style',
              'script',
              '[role="navigation"]',
              '[role="dialog"]',
              '[role="banner"]',
              '[role="complementary"]',
              '.cookie-consent-banner', // Ejemplo de clase específica
              '.social-follow', // Ejemplo de clase específica
              '.crawler-volverAEspecialidades', // Clase para el botón de volver
            ];

            // Eliminar los elementos no deseados del clon
            selectorsToRemove.forEach((selector) => {
              contentClone
                .querySelectorAll(selector)
                .forEach((el) => el.remove());
            });

            // Añadir saltos de línea después de los elementos de bloque para preservar la estructura
            contentClone
              .querySelectorAll('p, br, h1, h2, h3, h4, h5, h6, div, li')
              .forEach((el) => {
                el.insertAdjacentText('afterend', '\n');
              });

            // Obtener el texto y limpiar los saltos de línea múltiples
            const rawText = contentClone.innerText;
            return rawText.replace(/(\n\s*)+/g, '\n\n').trim();
          })(),
          internalLinks: links,
        };
      });
      console.log(`✅ Añadiendo data a: ${data.title}`);

      results.push({
        title: data.title,
        description: data.description,
        h1: data.h1,
        h2s: data.h2s,
        h3s: data.h3s,
        content: data.content,
        url: data.url,
      });

      // Añadir enlaces internos al queue si no fueron visitados
      for (const link of data.internalLinks) {
        const normalized = normalizeUrl(link);

        if (!visited.has(normalized) && !queue.includes(normalized)) {
          console.log('➕ Añadiendo al queue:', normalized);
          queue.push(normalized);
        }
      }
    } catch (err) {
      console.error(`❌ Error al procesar ${url}: ${err.message}`);
    }
  }

  await browser.close();
  return results;
}

(async () => {
  const startUrls = await getUrlsFromSitemap();
  const crawledData = await crawlSite(startUrls);

  const outputFile = path.join(
    process.cwd(),
    'scripts',
    'data',
    'crawledData.js'
  );
  const contentData = `export const crawledData = ${JSON.stringify(
    crawledData,
    null,
    2
  )};
`;
  fs.writeFileSync(outputFile, contentData, 'utf-8');
  console.log(
    `✅ Crawling completado. ${contentData.length} secciones guardadas en crawledData.js`
  );
})();
