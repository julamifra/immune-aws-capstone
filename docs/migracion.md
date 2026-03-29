# Documentacion de migracion

## Objetivo de este documento

Este documento recoge de forma incremental las decisiones, cambios y avances realizados durante la migracion del proyecto desde una base en React + Supabase hacia una arquitectura desplegada en AWS.

La idea es que sirva como bitacora tecnica del trabajo realizado y, al mismo tiempo, como base reutilizable para la memoria del proyecto, anexos o defensa.

## Contexto de la migracion

El proyecto parte de una aplicacion web ya existente construida en React. El estado original del repositorio estaba orientado principalmente al frontend y a un despliegue anterior ajeno a la arquitectura objetivo actual.

La migracion definida para este repositorio plantea:

- mantener el frontend como SPA estatica en React
- desplegar la demo del frontend en Amazon S3 mediante static website hosting
- sustituir progresivamente dependencias previas por servicios nativos de AWS
- definir toda la infraestructura con Terraform

## Criterio arquitectonico adoptado

Para este proyecto se ha fijado Terraform como herramienta principal de infraestructura como codigo.

Aunque en los apuntes del master aparece AWS CDK como opcion habitual para desplegar sobre AWS, en este repositorio se ha decidido usar Terraform por varias razones:

- permite una infraestructura clara y legible para un contexto academico
- facilita la modularidad y la separacion por entornos
- encaja bien con una demo simple de laboratorio
- permite dejar una base facilmente ampliable para siguientes fases de la migracion

## Trabajo realizado hasta ahora

### 1. Reorientacion del repositorio hacia la migracion a AWS

Se ha revisado la documentacion principal del proyecto para dejar de describir exclusivamente el despliegue heredado del frontend y pasar a reflejar el nuevo enfoque de migracion a AWS.

En esta fase se ha dejado claro que:

- el frontend sigue siendo una SPA en React
- el despliegue demo del frontend se hace como build estatica
- la infraestructura del proyecto se define con Terraform
- la demo inicial se apoya en Amazon S3 static website hosting

### 2. Preparacion de la infraestructura base en Terraform para la demo

Se ha identificado y preparado el entorno inicial de Terraform para la demo en:

- `infra/terraform/environments/demo`

Tambien se ha dejado un modulo reutilizable para el frontend en:

- `infra/terraform/modules/s3_frontend`

La infraestructura creada en esta primera fase cubre el hosting minimo del frontend en AWS mediante:

- bucket S3 para alojar el frontend compilado
- configuracion de website hosting
- fallback a `index.html` para compatibilidad con rutas SPA
- cifrado del bucket
- versionado
- politica de lectura publica para la URL de website del bucket

Esta decision responde al objetivo de mantener una demo viable en laboratorio, evitando introducir todavia servicios adicionales como CloudFront mientras no sean imprescindibles.

### 3. Despliegue del frontend como sitio estatico en S3

Se ha completado el flujo basico de despliegue del frontend en AWS:

1. compilacion del frontend con Vite
2. despliegue de la infraestructura necesaria con Terraform
3. sincronizacion del contenido generado en `dist/` hacia el bucket S3 del frontend
4. validacion del acceso mediante el website endpoint del bucket

Durante esta fase se ha confirmado un aspecto relevante de la arquitectura demo:

- el website endpoint de S3 para static website hosting debe abrirse mediante `http`
- en esta fase no se usa `https` porque no hay CloudFront delante del bucket

Este punto es importante porque refleja una diferencia explicita entre:

- la arquitectura demo desplegable, centrada en simplicidad
- la arquitectura objetivo recomendada, donde si se contempla CloudFront delante de S3

### 4. Ajuste temporal de variables de entorno del frontend

El frontend todavia conserva referencias heredadas a variables de entorno relacionadas con Supabase, en particular variables `VITE_*` necesarias durante el proceso de build.

Para no bloquear la compilacion mientras el backend real sigue en transicion, se ha adoptado una solucion temporal basada en:

- archivo `.env.production.local`
- valores fake o provisionales para permitir el build del frontend

Esta decision permite seguir avanzando en la migracion de infraestructura sin tener que completar todavia la sustitucion funcional total del backend.

Se trata de una medida transitoria y controlada. La aplicacion puede compilar y desplegarse, aunque cualquier funcionalidad que dependa realmente de Supabase seguira necesitando ser migrada en siguientes fases.

### 5. Automatizacion local del flujo de despliegue

Se ha definido un flujo de ejecucion local para simplificar el despliegue de la demo sin depender todavia de CI/CD en remoto.

Para ello se han creado scripts locales orientados a:

- inicializar, planificar y aplicar Terraform
- obtener outputs utiles del entorno demo
- compilar el frontend
- sincronizar el build con el bucket S3

Este enfoque permite:

- repetir despliegues de manera mas controlada
- reducir errores manuales
- dejar una base clara para una futura automatizacion con GitHub Actions si se desea

### 6. Limpieza de restos del flujo anterior del frontend

Como parte de la reorganizacion del proyecto, tambien se han eliminado elementos que ya no aportaban valor al nuevo flujo de migracion, incluyendo comandos y artefactos asociados a tareas antiguas del frontend que no forman parte del despliegue actual en AWS.

Con ello se ha dejado una base documental y operativa mas alineada con el objetivo real del proyecto.

## Resultado actual de la migracion

En el momento actual puede considerarse completada la primera fase de la migracion demo del frontend:

- frontend React mantenido como SPA estatica
- documentacion principal del repositorio reestructurada
- infraestructura base en Terraform preparada
- bucket S3 del frontend desplegado en AWS
- build del frontend publicado en el bucket
- flujo local de despliegue simplificado y documentado

## Avance actual de la siguiente fase

Tras cerrar la base inicial del frontend, se ha empezado la siguiente etapa de migracion centrada en persistencia y almacenamiento complementario en AWS.

### 7. Incorporacion de un bucket S3 adicional para assets

Se ha añadido un nuevo modulo Terraform para crear un bucket S3 destinado a almacenar assets del blog y otros recursos estaticos desacoplados del frontend principal.

Este bucket responde a una necesidad distinta del bucket de hosting del frontend:

- el bucket del frontend sirve el build de la SPA
- el bucket de assets se reserva para imagenes y recursos del blog

La separacion mejora la claridad de la arquitectura y prepara mejor la futura evolucion hacia una capa de distribucion mas completa.

### 8. Incorporacion de la tabla DynamoDB `BlogPosts`

Se ha añadido un modulo Terraform especifico para la tabla `BlogPosts`, siguiendo el modelo de acceso definido para la migracion.

La tabla se ha preparado con:

- clave primaria `postId`
- indice secundario global por `slug`
- indice secundario global por `status` y `publishedAt`

Con esta estructura se cubren ya los accesos minimos previstos para la demo:

- obtencion por identificador
- obtencion por slug
- listado de posts publicados ordenados por fecha

Esta decision evita depender de un modelo relacional heredado y deja una base mas alineada con un backend serverless sencillo.

### 9. Integracion de los nuevos recursos en el entorno demo

El entorno Terraform `demo` ya no se limita al bucket del frontend. A partir de esta fase incluye:

- bucket S3 del frontend
- bucket S3 de assets
- tabla DynamoDB `BlogPosts`

Tambien se han ampliado los outputs para facilitar las siguientes fases de trabajo, por ejemplo:

- nombre del bucket de assets
- URL base publica de assets
- nombre de la tabla `BlogPosts`
- nombres de los indices de consulta

### 10. Preparacion de una semilla de datos demo

Se ha preparado un flujo local sencillo para insertar una pequena carga inicial de posts demo en la tabla `BlogPosts`.

El objetivo de esta carga no es simular un proceso completo de migracion de datos, sino:

- disponer de contenido minimo para pruebas
- validar la tabla y sus indices
- dejar lista la base para la futura Lambda del blog y su exposicion por API Gateway

Este paso reduce riesgo en la siguiente fase, ya que permite trabajar primero con datos reales de prueba antes de integrar el backend completo.

### 11. Incorporacion de la Lambda del blog reutilizando `LabRole`

Se ha preparado la primera Lambda funcional del proyecto para listar posts publicados desde DynamoDB.

En lugar de crear un role IAM nuevo con Terraform, el despliegue de laboratorio reutiliza el role ya disponible `LabRole`, que ha demostrado funcionar en las pruebas manuales desde la consola AWS.

Con este ajuste se evita el bloqueo de permisos relacionado con `iam:CreateRole` y se mantiene la demo alineada con las restricciones reales del laboratorio.

### 12. Exposicion inicial mediante API Gateway

Tambien se ha dejado integrada una capa minima de API Gateway HTTP API para publicar la ruta:

- `GET /blog`

De este modo, el backend demo vuelve a ser desplegable en AWS dentro de las limitaciones del laboratorio, siempre que `LabRole` conserve permisos de ejecucion y lectura sobre DynamoDB.

### 13. Despliegue efectivo y validacion del backend demo

Tras los ajustes necesarios por las restricciones IAM del laboratorio, se ha ejecutado correctamente el despliegue del backend demo con Terraform.

En esta fase se ha confirmado:

- creacion de la Lambda de listado de posts
- creacion del API Gateway HTTP API
- asociacion de la ruta `GET /blog`
- uso correcto de `LabRole` como execution role
- conexion funcional de la Lambda con la tabla DynamoDB `BlogPosts`

Con ello queda validado que la arquitectura minima del backend del blog ya funciona de extremo a extremo dentro del entorno de laboratorio.

### 14. Estado actual tras esta fase

En este punto, la demo desplegable en AWS ya incluye:

- frontend estatico en S3
- bucket S3 de assets
- tabla DynamoDB `BlogPosts`
- semilla manual de posts demo
- Lambda de listado de posts reutilizando `LabRole`
- API Gateway con un endpoint funcional del blog

Esto supone que la migracion ya ha cubierto:

1. base Terraform del entorno demo
2. buckets S3
3. DynamoDB
4. primera Lambda del backend
5. primera exposicion por API Gateway

### 15. Decision operativa para el entorno demo del laboratorio

Finalmente, el entorno `demo` se ha adaptado para aprovechar un recurso ya existente del laboratorio en lugar de intentar modelar todo IAM desde Terraform.

La decision adoptada ha sido:

- mantener S3 y DynamoDB gestionados por Terraform
- desplegar Lambda y API Gateway desde Terraform
- reutilizar `LabRole` como execution role de la Lambda

Con ello se consigue una demo funcional sin depender de permisos IAM que la cuenta de laboratorio no concede para crear roles nuevos.

## Diferencia entre demo actual y arquitectura objetivo

### Demo actual

- frontend en S3 static website hosting
- acceso directo mediante website endpoint del bucket
- despliegue sencillo orientado a laboratorio
- sin CloudFront en esta fase
- backend del blog desplegable en AWS reutilizando `LabRole`

### Arquitectura objetivo recomendada

- CloudFront delante de S3
- posible integracion con Route 53
- backend serverless con API Gateway + Lambda
- persistencia en DynamoDB
- observabilidad con CloudWatch

## Proximos pasos previstos

Tras cerrar esta nueva fase, los siguientes bloques naturales de la migracion son:

1. incorporar lectura por `slug` o `postId` para detalle de posts
2. anadir la Lambda del formulario de contacto
3. adaptar el frontend para consumir API Gateway en lugar de Supabase
4. ampliar observabilidad y validar el flujo end-to-end
5. endurecer progresivamente la arquitectura demo sin salir del alcance del laboratorio

## Nota de uso

Este documento debe actualizarse de forma incremental conforme avance la migracion. La idea es recoger no solo lo que se implemente, sino tambien las decisiones tecnicas y las razones por las que se adopta cada paso.
