# ioamigo-website-frontend

> Frontend del sitio web de IO Amigo, una clínica oftalmológica.

## Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Cómo Empezar](#cómo-empezar)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Scripts para el Chatbot y Sitemap](#scripts-para-el-chatbot-y-sitemap)
- [Despliegue](#despliegue)
- [Cómo Contribuir](#cómo-contribuir)
- [Licencia](#licencia)

## Sobre el Proyecto

Este repositorio contiene el código fuente del frontend para el sitio web de IO Amigo. El proyecto está diseñado para proporcionar una interfaz de usuario moderna, rápida y accesible para los pacientes y visitantes de la clínica. Incluye secciones informativas, un blog de noticias y un panel de administración básico para gestionar el contenido.

## Tecnologías Utilizadas

- **Framework Principal**: [React](https://reactjs.org/) con [Vite](https://vitejs.dev/) para un desarrollo y compilación rápidos.
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) para un diseño de utilidades y componentes reutilizables.
- **Componentes UI**: [Shadcn UI](https://ui.shadcn.com/) (implementado a través de Radix UI y `tailwind-merge`) para componentes de alta calidad y accesibles.
- **Backend y Base de Datos**: [Supabase](https://supabase.io/) para la gestión de noticias y el almacenamiento de embeddings del chatbot.
- **Enrutamiento**: [React Router](https://reactrouter.com/) para la navegación en la aplicación.
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) para animaciones fluidas y declarativas.
- **Inteligencia Artificial**: [Google Generative AI](https://ai.google.dev/) para la generación de embeddings del chatbot.
- **Iconos**: [Lucide React](https://lucide.dev/guide/packages/lucide-react) para un conjunto de iconos limpio y consistente.

## Cómo Empezar

Sigue estos pasos para tener una copia local del proyecto funcionando.

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) (la versión se especifica en el archivo `.nvmrc`) y npm instalados.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Instalación

1.  Clona el repositorio.
    ```sh
    git clone https://github.com/IO-AMIGO/ioamigo-website-frontend.git
    ```
2.  Instala las dependencias de NPM.
    ```sh
    npm install
    ```
3.  Crea un archivo `.env` en la raíz del proyecto y añade las variables de entorno necesarias para conectar con Supabase y la API de Google.
    ```
    VITE_SUPABASE_URL=TU_URL_DE_SUPABASE
    VITE_SUPABASE_ANON_KEY=TU_CLAVE_ANONIMA_DE_SUPABASE
    GOOGLE_API_KEY=TU_API_KEY_DE_GOOGLE
    ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Sirve la compilación de producción localmente para previsualización.
- `npm run lint`: Ejecuta ESLint para revisar el código en busca de errores y problemas de estilo.
- `npm run format`: Formatea todo el código con Prettier.
- `npm run crawl`: Ejecuta el script de crawling para extraer datos del sitio web.
- `npm run generate-embeddings`: Ejecuta el script que genera y guarda los embeddings para el chatbot.
- `npm run update-urls`: Actualiza la lista de URLs del sitio y el sitemap.

## Scripts para el Chatbot y Sitemap

Estos scripts, ubicados en la carpeta `scripts/`, son cruciales para recopilar y procesar la información que alimenta tanto al chatbot del sitio web como al `sitemap.xml`.

### Ficheros Clave

- **`crawler_v2.js`**: Rastrea el sitio web para extraer contenido textual. Guarda el resultado en `crawledData.js`.
- **`extraData.js`**: Contiene información añadida manualmente para enriquecer la base de conocimiento del chatbot (ej. preguntas frecuentes, detalles específicos).
- **`crawledData.js`**: (Generado automáticamente) Contiene los datos extraídos por el crawler. **No debe ser modificado manualmente**.
- **`generateEmbeddings.js`**: Orquesta el proceso de embedding. Lee los datos de `crawledData.js` y `extraData.js`, los procesa, genera los vectores de embedding a través de la API de Google y los almacena en Supabase.
- **`updateUrlsAndSitemap.js`**: Script que genera dos ficheros clave: `scripts/data/all_urls.js` (un listado de todas las URLs del sitio) y `public/sitemap.xml`. Actualiza el sitemap de forma inteligente, añadiendo solo las URLs nuevas.
- **`utils.js`**: Proporciona funciones auxiliares para normalizar y dividir texto.

### Flujos de Trabajo

#### Actualizar la Base de Conocimiento del Chatbot

Para actualizar la información del chatbot, sigue estos pasos en orden:

1.  **Actualizar contenido del sitio web (Crawling):**
    Ejecuta este comando para rastrear el sitio web y actualizar `crawledData.js`.

    ```sh
    npm run crawl
    ```

2.  **(Opcional) Añadir conocimiento manual:**
    Si es necesario, edita directamente el fichero `scripts/extraData.js` para añadir o modificar información.

3.  **Generar y almacenar los nuevos embeddings:**
    Este es el paso final. El script borrará los datos antiguos y generará los nuevos embeddings a partir de la información actualizada.
    ```sh
    npm run generate-embeddings
    ```

#### Actualizar Sitemap y listado de URLs

Este comando actualiza tanto el `sitemap.xml` como el fichero `all_urls.js`.

```sh
npm run update-urls
```

Si solo deseas actualizar el fichero `all_urls.js` sin modificar el sitemap, puedes usar el flag `--urls-only`:

```sh
npm run update-urls -- --urls-only
```

**Nota:** El doble guion (`--`) es necesario para que npm pase el flag correctamente al script.

## Despliegue

El proyecto utiliza GitHub Actions para automatizar el despliegue. Revisa los archivos en la carpeta `.github/workflows` para más detalles sobre los flujos de CI/CD.

- **deploy.yml**: Despliega la rama `main` al entorno de producción.
- **deploy-maintenance.yml**: Activa un modo de mantenimiento.
- **restore-from-maintenance.yml**: Desactiva el modo de mantenimiento.

## Cómo Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1.  Haz un Fork del Proyecto.
2.  Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Haz Commit de tus Cambios (`git commit -m '''Add some AmazingFeature'''`).
4.  Haz Push a la Branch (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

## Licencia

Este proyecto es privado y no tiene una licencia de código abierto. Todos los derechos están reservados.
