# immune-aws-capstone

Repositorio del proyecto de migracion de una aplicacion web en React hacia AWS, con infraestructura como codigo en Terraform.

El repositorio combina dos lineas de trabajo:

- mantener operativo el frontend actual en React
- construir una arquitectura demo en AWS, simple y reproducible, sobre la que seguir migrando el proyecto

La infraestructura del proyecto se define con Terraform. En este repositorio, Terraform es la fuente de verdad para AWS.

## Objetivo del proyecto

Este proyecto persigue dos metas en paralelo:

- desplegar una version demo o de laboratorio en AWS
- documentar una arquitectura objetivo mas solida para una evolucion posterior a produccion

## Estado actual

### Frontend

El frontend es una SPA en React construida con Vite. A dia de hoy sigue siendo la base funcional del proyecto y contiene:

- navegacion con React Router
- estilos con Tailwind CSS
- componentes reutilizables
- paginas informativas, blog, contacto y contenido institucional

Parte del codigo todavia conserva integracion heredada con Supabase. Esa dependencia esta en transicion y se ira sustituyendo progresivamente por backend e infraestructura en AWS.

### Infraestructura AWS

La base Terraform ya creada en el repositorio despliega, por ahora, el minimo necesario para la demo del frontend:

- bucket S3 para alojar el frontend compilado
- bucket S3 adicional para assets del blog
- tabla DynamoDB `BlogPosts`
- Lambda `GET /blog` para listar posts publicados
- Lambda `POST /events` para registrar eventos del frontend en CloudWatch
- API Gateway HTTP API con la ruta `GET /blog`
- API Gateway HTTP API con la ruta `POST /events`
- configuracion de static website hosting
- fallback SPA con `index.html`
- cifrado del bucket
- versionado
- politica de lectura publica para la demo

La Lambda del blog y el API Gateway si se despliegan con Terraform. Lo unico que no se crea con Terraform en este entorno de laboratorio es el role IAM, ya que se reutiliza el role existente `LabRole`.

Ruta principal del entorno actual:

- [infra/terraform/environments/demo](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/infra/terraform/environments/demo)

Modulo reutilizable disponible:

- [infra/terraform/modules/s3_frontend](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/infra/terraform/modules/s3_frontend)
- [infra/terraform/modules/lambda_blog_list_posts](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/infra/terraform/modules/lambda_blog_list_posts)
- [infra/terraform/modules/apigatewayv2_http_api_blog_posts](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/infra/terraform/modules/apigatewayv2_http_api_blog_posts)

## Estructura principal

```text
/
  src/                         # Frontend React
  public/                      # Activos estaticos publicos
  infra/
    terraform/
      modules/
        s3_frontend/           # Modulo Terraform para hosting del frontend en S3
      environments/
        demo/                  # Entorno demo actual
  scripts/                     # Scripts locales de despliegue y apoyo
  docs/                        # Documentacion tecnica y funcional
```

## Stack actual

### Frontend

- React 18
- Vite
- React Router
- Tailwind CSS
- Radix UI / componentes UI reutilizables
- Framer Motion

### Infraestructura

- Terraform >= 1.6
- AWS Provider >= 5.0
- Amazon S3 static website hosting para la demo inicial

## Ejecucion local del frontend

### Prerrequisitos

- Node.js instalado
- npm instalado

### Instalacion

Desde la raiz del proyecto:

```powershell
npm install
```

### Desarrollo local

```powershell
npm run dev
```

### Build de produccion

```powershell
npm run build
```

### Previsualizar el build

```powershell
npm run preview
```

## Scripts disponibles

- `npm run dev`: levanta el frontend en desarrollo
- `npm run build`: genera el build de produccion en `dist/`
- `npm run preview`: sirve localmente el build generado
- `npm run lint`: ejecuta ESLint
- `npm run format`: formatea el codigo con Prettier
- `npm run tf:demo:init`: inicializa Terraform para el entorno demo
- `npm run tf:demo:plan`: genera el plan de Terraform del entorno demo
- `npm run tf:demo:apply`: aplica la infraestructura del entorno demo
- `npm run tf:demo:output`: muestra los outputs del entorno demo
- `npm run seed:blog:demo`: carga una pequena semilla de posts demo en DynamoDB
- `npm run deploy:frontend:demo`: genera el build y lo sincroniza con el bucket S3 del frontend
- `npm run deploy:demo`: ejecuta el flujo local completo de demo

## Configuracion local necesaria

### AWS CLI

Debes tener AWS CLI instalado y configurado localmente:

```powershell
aws --version
aws configure
aws sts get-caller-identity
```

### Variables del frontend

Las variables `VITE_*` se resuelven durante el build, no en el bucket S3. Para despliegue local usa un archivo `.env.production.local` en la raiz del proyecto.

Ejemplo temporal:

```text
VITE_SUPABASE_URL=https://example.invalid
VITE_SUPABASE_ANON_KEY=fake-anon-key-demo
VITE_BLOG_API_URL=https://tu-api.execute-api.tu-region.amazonaws.com/blog
VITE_EVENTS_API_URL=https://tu-api.execute-api.tu-region.amazonaws.com/events
```

Eso permite compilar el frontend mientras el backend real sigue en transicion. Si el frontend intenta usar Supabase de verdad, la llamada fallara en runtime.

### Variables de Terraform

En [infra/terraform/environments/demo](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/infra/terraform/environments/demo), copia el archivo de ejemplo:

```powershell
Copy-Item infra\terraform\environments\demo\terraform.tfvars.example infra\terraform\environments\demo\terraform.tfvars
```

Despues ajusta al menos:

- `aws_region`
- `project_name`
- `frontend_bucket_name`
- `assets_bucket_name`
- `blog_posts_table_name`
- `lambda_execution_role_name`

`frontend_bucket_name` y `assets_bucket_name` deben ser globalmente unicos en AWS.

## Flujo local de despliegue

### Opcion recomendada

Desde la raiz del proyecto:

```powershell
npm run deploy:demo
```

Ese comando ejecuta:

- `terraform plan`
- `terraform apply`
- `npm run build`
- `aws s3 sync` de `dist/` al bucket S3 del frontend

### Despliegue por partes

Si prefieres separar infraestructura y aplicacion:

```powershell
npm run tf:demo:init
npm run tf:demo:plan
npm run tf:demo:apply
npm run deploy:frontend:demo
```

Si solo quieres volver a publicar el frontend sin tocar Terraform:

```powershell
npm run deploy:frontend:demo
```

### Outputs utiles

Para ver los valores generados por Terraform:

```powershell
npm run tf:demo:output
```

Terraform devolvera valores como:

- `frontend_bucket_name`
- `frontend_website_endpoint`
- `frontend_website_domain`
- `assets_bucket_name`
- `assets_public_base_url`
- `blog_posts_table_name`
- `blog_posts_slug_index_name`
- `blog_posts_status_published_at_index_name`
- `blog_lambda_execution_role_name`
- `blog_lambda_execution_role_arn`
- `blog_list_posts_lambda_name`
- `frontend_event_logger_lambda_name`
- `blog_api_endpoint`
- `blog_posts_route_url`
- `frontend_events_route_url`

La URL del website endpoint de S3 para la demo debe abrirse con `http`, no con `https`.

### Carga inicial de posts demo

Despues de aplicar Terraform, puedes cargar una pequena semilla de posts en la tabla `BlogPosts` con:

```powershell
npm run seed:blog:demo
```

Ese comando:

- obtiene el nombre real de la tabla desde Terraform
- inserta dos posts de ejemplo
- deja lista una base minima para futuras pruebas del backend y del blog

Despues puedes ejecutar:

```powershell
npm run tf:demo:output
```

Y probar la URL `blog_posts_route_url` para comprobar la primera API del blog.

## Scripts locales de despliegue

Los scripts que soportan el flujo local estan en:

- [scripts/terraform-demo.ps1](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/scripts/terraform-demo.ps1)
- [scripts/seed-blog-posts-demo.ps1](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/scripts/seed-blog-posts-demo.ps1)
- [scripts/deploy-frontend-demo.ps1](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/scripts/deploy-frontend-demo.ps1)
- [scripts/deploy-demo-all.ps1](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/scripts/deploy-demo-all.ps1)

Resumen de funciones:

- `terraform-demo.ps1`: inicializa, planifica, aplica, muestra outputs o destruye el entorno demo
- `seed-blog-posts-demo.ps1`: carga una pequena semilla manual de posts demo en DynamoDB
- `deploy-frontend-demo.ps1`: hace build y sincroniza `dist/` con el bucket de frontend recuperado desde Terraform
- `deploy-demo-all.ps1`: encadena `plan`, `apply` y despliegue del frontend

## CI/CD futuro con GitHub Actions

Mas adelante se puede documentar una automatizacion equivalente con GitHub Actions. De momento no es el flujo principal del proyecto.

Workflows ya preparados como referencia futura:

- [deploy-frontend-demo.yml](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/.github/workflows/deploy-frontend-demo.yml)
- [terraform-demo.yml](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/.github/workflows/terraform-demo.yml)

## Hoja de ruta de infraestructura

La base actual ya permite empezar con el frontend en S3. Los siguientes bloques previstos, alineados con el alcance del proyecto, son:

1. endpoint de detalle de posts por `slug` o `postId`
2. Lambda del formulario de contacto
3. adaptacion del frontend para dejar de depender de Supabase
4. observabilidad en CloudWatch
5. endurecimiento progresivo de la arquitectura demo

## Nota sobre Lambda y API Gateway

En este entorno `demo`, tanto Lambda como API Gateway se despliegan con Terraform.

Para adaptarse al laboratorio, el role IAM no se crea con Terraform y la Lambda usa el role existente `LabRole`. Ese role debe seguir teniendo permisos suficientes para:

- escribir logs en CloudWatch
- leer la tabla `BlogPosts`
- consultar el indice `status-publishedAt-index`

## Sobre el despliegue anterior

El proyecto venia de una etapa anterior con despliegue frontend y CI/CD orientado a otro stack. En el repositorio aun existen workflows heredados en:

- [deploy.yml](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/.github/workflows/deploy.yml)
- [deploy-maintenance.yml](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/.github/workflows/deploy-maintenance.yml)
- [restore-from-maintenance.yml](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/.github/workflows/restore-from-maintenance.yml)

Esos flujos deben considerarse heredados del despliegue anterior mientras no se readapten al nuevo flujo basado en AWS y Terraform.

## Documentacion relacionada

- [AGENTS.md](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/AGENTS.md)
- [infra/terraform/environments/demo/README.md](C:/Users/julam/Desktop/mis_codigos/immune-aws-capstone/infra/terraform/environments/demo/README.md)
