# AGENTS.md

## Propósito del repositorio
Este repositorio implementa la migración de una aplicación web existente en React + Supabase hacia AWS.

El objetivo principal es construir una versión funcional para **entorno de pruebas/demo** y, en paralelo, dejar documentada la **arquitectura objetivo recomendada** para una versión más sólida en producción.

## Regla principal de diseño
**La infraestructura como código de este proyecto se implementa con Terraform.**

Aunque en la documentación del máster se menciona AWS CDK y su despliegue sobre CloudFormation, en este repositorio **NO** debes generar infraestructura nueva con CDK salvo que se pida expresamente. Usa Terraform como fuente de verdad para la infraestructura. Si necesitas mencionar CDK, hazlo solo en documentación comparativa o justificación técnica.

## Arquitectura objetivo del proyecto
### Demo / laboratorio (sin CloudFront)
- Frontend React compilado y desplegado en Amazon S3 usando static website hosting.
- Bucket adicional de S3 para imágenes y assets del blog.
- Backend serverless con Amazon API Gateway + AWS Lambda.
- Persistencia en Amazon DynamoDB.
- Observabilidad con CloudWatch Logs y, opcionalmente, CloudWatch Alarms.
- Route 53 solo si hay control del DNS; si no, se puede usar temporalmente la URL website del bucket S3 para la demo.
- Las Lambdas del formulario de contacto y del blog pueden desplegarse como imágenes de contenedor almacenadas en Amazon ECR.
- **No contenerizar el frontend React.**

### Arquitectura recomendada / objetivo final
- Route 53
- CloudFront delante del frontend y/o contenidos estáticos
- S3 como origen del frontend y assets
- API Gateway + Lambda para backend
- DynamoDB para datos
- CloudWatch para logs, métricas y alarmas
- Seguridad adicional con WAF/Shield solo si se pide expresamente

## Decisiones de arquitectura ya fijadas
### Frontend
- El frontend es una SPA en React.
- Se despliega como build estática.
- No se debe mover a contenedores ni a ECS/EKS para este proyecto.
- El hosting base para demo es S3 static website hosting.
- En arquitectura objetivo sí se debe contemplar CloudFront delante de S3.

### Backend
- Patrón preferido: API Gateway + Lambda.
- Implementar endpoints mínimos para:
  - formulario de contacto
  - gestión/listado/lectura de posts del blog
  - subida o referencia de imágenes del blog si aplica
- El backend debe ser desacoplado, simple y fácil de demostrar en laboratorio.

### Persistencia
Usar DynamoDB en lugar de mantener Supabase/Postgres dentro del alcance de la demo.

#### Tabla `BlogPosts`
- PK: `postId`
- Atributos esperados:
  - `slug`
  - `title`
  - `excerpt`
  - `content`
  - `coverImageUrl`
  - `status` (`draft` | `published`)
  - `publishedAt`
  - `createdAt`
  - `updatedAt`
  - `author`
  - `tags`
- Accesos requeridos:
  - obtener por `postId`
  - obtener por `slug`
  - listar publicados ordenados por fecha
- Índices:
  - `GSI1`: partition key `slug`
  - `GSI2`: partition key `status`, sort key `publishedAt`

#### Tabla `AppLogs`
- PK: `logId`
- Atributos esperados:
  - `type`
  - `timestamp`
  - `message`
  - `metadata`
  - `source`
  - `status`
- Índices:
  - `GSI1`: partition key `type`, sort key `timestamp`

### Contenedores
- Solo contenerizar Lambdas concretas, no el frontend.
- Flujo esperado:
  1. código Lambda en Node.js
  2. Dockerfile
  3. build de imagen
  4. push a Amazon ECR
  5. Lambda creada desde imagen de contenedor

## Prioridades de implementación
Cuando haya que elegir qué hacer primero, sigue este orden:
1. Terraform base del entorno
2. buckets S3
3. DynamoDB
4. IAM mínimo necesario
5. ECR para Lambdas con imagen
6. Lambdas
7. API Gateway
8. observabilidad en CloudWatch
9. documentación
10. mejoras opcionales

## Restricciones importantes
- No introducir RAG ni chatbot en esta migración.
- No ampliar el alcance con servicios innecesarios.
- No usar ECS, EKS o Fargate salvo que se pida expresamente como comparación.
- No proponer SSR/Next.js salvo que se solicite; la base actual es React estático.
- Evitar sobreingeniería.
- Mantener la demo viable en laboratorio.

## Criterios técnicos
- Favorecer simplicidad, reproducibilidad y coste bajo.
- Infraestructura modular con Terraform.
- Variables claras por entorno (`dev`, `test`, `prod` si aplica).
- Convenciones de nombres coherentes.
- Tags en recursos Terraform.
- Principio de mínimo privilegio en IAM.
- Secrets y valores sensibles fuera del código.
- Código listo para lectura académica y memoria del proyecto.

## Convenciones de estructura sugeridas
Usa esta estructura salvo que el repositorio ya tenga otra mejor:

```text
/
  frontend/
  backend/
    lambdas/
      contact/
      blog/
  infra/
    terraform/
      modules/
      environments/
        demo/
        dev/
        prod/
  docs/
```

## Reglas para cambios de código
- Antes de modificar, inspecciona la estructura existente y adáptate a ella.
- Haz cambios pequeños y trazables.
- No renombres masivamente carpetas o archivos sin motivo.
- Si falta contexto, deja TODOs claros en vez de inventar comportamiento crítico.
- Para el frontend, evita romper rutas SPA.
- Para el backend, define contratos JSON simples y estables.

## Reglas para Terraform
- Usar Terraform moderno y legible.
- Separar módulos reutilizables cuando aporte claridad real.
- No meter toda la infraestructura en un único archivo gigante.
- Definir outputs útiles.
- Documentar variables obligatorias.
- Preparar despliegue sencillo para demo.
- Si una decisión puede complicar el laboratorio, elige la opción más simple.

## Reglas para DynamoDB
- Modelar según patrones de acceso, no por costumbre relacional.
- Evitar scans si puede resolverse con Query e índices.
- Mantener atributos consistentes.
- Fechas en formato ISO 8601 cuando sea práctico.

## Reglas para Lambdas
- Node.js como runtime preferido para las Lambdas del proyecto.
- Código pequeño, modular y con manejo de errores.
- Logging estructurado.
- Validación de entrada.
- Variables de entorno para nombres de tabla, bucket, etc.
- No incrustar secretos en el código.
- Si la Lambda usa imagen contenedor, mantener Dockerfile pequeño y reproducible.

## Reglas para documentación
Cuando generes documentación:
- Diferencia claramente entre:
  - arquitectura demo desplegable
  - arquitectura objetivo recomendada
- Explica por qué en la demo no se usa CloudFront, pero sí se recomienda en producción.
- Explica por qué se usa Terraform aquí aunque los apuntes mencionen CDK.
- Usa lenguaje claro, técnico, pero natural.
- Prioriza texto que pueda reutilizarse en memoria, defensa o anexos.

## Qué hacer si hay conflicto entre instrucciones
La prioridad es:
1. Requisitos explícitos del usuario
2. Este archivo `AGENTS.md`
3. La estructura real del repositorio
4. Suposiciones razonables

## Resultado esperado de cualquier tarea
Cada tarea debería dejar uno o varios de estos resultados:
- código listo para adaptar al proyecto real
- Terraform base útil
- documentación reutilizable para el máster
- decisiones de arquitectura coherentes con el alcance
