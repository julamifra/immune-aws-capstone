# Reglas y Convenciones del Proyecto para Gemini

Este documento define las directrices que el agente de IA debe seguir al realizar cambios en el código base de `ioamigo-website-frontend`.

## 1. Reglas Generales

- **Idioma:** Todas las respuestas y comunicaciones deben ser en **español**.
- **Error de `vite.config.js`:** No intentes solucionar repetidamente el error `no-useless-escape` en `vite.config.js`. Acusa su presencia pero no intentes arreglarlo a menos que se pida explícitamente.
- **Utilizar siempre Context7:** Utiliza siempre el MCP de Context7.

## 2. Pila Tecnológica (Tech Stack)

- **Framework:** React 18+
- **Bundler:** Vite
- **Lenguaje:** JavaScript (ES6+)
- **Estilos:** Tailwind CSS
- **UI Components:** Componentes personalizados (posiblemente basados en shadcn/ui) ubicados en `src/components/ui`.
- **Backend/DB:** Supabase (según `src/lib/supabaseClient.js`).

## 3. Convenciones de Código

- **Componentes:**
  - **Reutilización:** Antes de crear un componente nuevo, busca siempre en `src/components` si ya existe uno que puedas reutilizar o adaptar.
  - **UI Primitivos:** Para elementos de UI básicos (botones, cards, diálogos, etc.), utiliza los componentes ya definidos en `src/components/ui`. No introduzcas nuevas librerías de UI para mantener la consistencia.
  - **Nomenclatura:** Los componentes deben seguir la convención `PascalCase` (ej. `MiComponente.jsx`).
- **Estilos:**
  - Utiliza exclusivamente **clases de utilidad de Tailwind CSS** para estilizar.
  - Revisa los estilos de la página para asegurar la coherencia con el diseño existente.
  - No añadas CSS en línea (`style={{...}}`) a menos que sea para valores dinámicos.
  - Evita crear nuevos ficheros `.css`. Si es necesario añadir estilos globales, modifica `src/index.css`.
- **Gestión de Datos:**
  - El contenido estático del sitio (info de especialidades, equipo, publicaciones, etc.) se gestiona en los ficheros de `src/data`. Para actualizar dicho contenido, debes modificar esos ficheros.
- **Routing:**
  - Las rutas de la aplicación se definen en `src/config/routes.js`. Para añadir o modificar páginas, edita este fichero y, si es necesario, el componente `App.jsx`.
- **Estado Global:**
  - Para el estado compartido entre componentes, utiliza React Context. Los contextos se encuentran en `src/contexts`.
- **Servicios Externos:**
  - Las interacciones con APIs o servicios de terceros (como Supabase) deben encapsularse en los módulos de `src/services`.

## 4. Flujo de Trabajo

- Al añadir una **nueva página**, asegúrate de seguir estos pasos:
  1. Crea el componente de la página en `src/pages`.
  2. Añade la nueva ruta en `src/config/routes.js`.
  3. Crea un fichero de metadatos para SEO en `src/data/Metadata` (ej. `nuevaPaginaMeta.js`).
  4. Si aplica, crea un fichero `jsonLd` correspondiente en `src/data/jsonLd`.
