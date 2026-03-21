# Guía de Buenas Prácticas SEO

Esta guía proporciona las mejores prácticas SEO para crear y optimizar contenido en el sitio web del Instituto Oftalmológico Amigó.

## 1. Títulos de Página (Title Tags)

### Características Óptimas

- **Longitud**: 50-60 caracteres (máximo 70 caracteres)
- **Unicidad**: Cada página debe tener un título único
- **Estructura**: Nombre de la Página | Categoría (si aplica) | Marca

### Ejemplos Correctos

```
✅ Operación de Miopía | Instituto Oftalmológico Amigó
✅ Blog | Instituto Oftalmológico Amigó
✅ Tratamiento de Glaucoma en Tenerife | IOA
```

### Ejemplos Incorrectos

```
❌ Instituto Oftalmológico Amigó - Clínica de Oftalmología en Tenerife con Especialistas en Operaciones de Miopía (demasiado largo)
❌ Inicio (demasiado corto, no descriptivo)
```

## 2. Meta Descriptions

### Características Óptimas

- **Longitud**: 150-160 caracteres (máximo 320 caracteres para móvil)
- **Contenido**: Descripción clara del contenido de la página
- **Call-to-Action**: Incluir un CTA cuando sea apropiado (ej: "Pide tu cita")
- **Keywords**: Incluir palabras clave principales de forma natural

### Ejemplos Correctos

```
✅ "En el Instituto Oftalmológico Amigó en Tenerife, cuidamos de tu salud visual con un equipo de expertos y tecnología de vanguardia. Pide tu cita."

✅ "Descubre todo sobre la operación de miopía con láser. Nuestros especialistas en Tenerife te ofrecen las técnicas más avanzadas. Consulta sin compromiso."
```

### Ejemplos Incorrectos

```
❌ "Clínica" (demasiado corto)
❌ "En el Instituto Oftalmológico Amigó ofrecemos servicios de oftalmología, cirugía ocular, operación de cataratas, glaucoma, retina, miopía, hipermetropía, astigmatismo, presbicia..." (demasiado largo, lista de keywords)
```

## 3. Estructura de Headings (H1-H6)

### Jerarquía Correcta

- **H1**: Un solo H1 por página - Título principal
- **H2**: Secciones principales del contenido
- **H3**: Subsecciones dentro de H2
- **H4-H6**: Niveles adicionales si es necesario

### Ejemplo de Estructura

```html
<h1>Operación de Miopía con Láser en Tenerife</h1>

<h2>¿Qué es la Miopía?</h2>
<h3>Síntomas de la Miopía</h3>
<h3>Causas de la Miopía</h3>

<h2>Técnicas de Cirugía Refractiva</h2>
<h3>Láser LASIK</h3>
<h3>Láser PRK</h3>
<h3>Láser Femtosegundo</h3>

<h2>Preguntas Frecuentes</h2>
```

### Reglas Importantes

- ❌ No saltarse niveles (ej: H1 → H3)
- ❌ No usar headings solo para estilo
- ✅ Usar headings de forma semántica
- ✅ Incluir keywords de forma natural en H2 y H3

## 4. Optimización de Imágenes

### Atributos Alt Text

- **Descriptivo**: Describe el contenido de la imagen
- **Conciso**: 125 caracteres o menos
- **Keywords**: Incluir keywords cuando sea natural
- **No redundante**: No repetir "imagen de" o "foto de"

### Ejemplos

```html
✅
<img
  src="quirofano.jpg"
  alt="Quirófano del Instituto Oftalmológico Amigó en Santa Cruz de Tenerife"
/>

✅
<img
  src="laser-femto.jpg"
  alt="Sistema láser femtosegundo para cirugía de cataratas"
/>

❌ <img src="img1.jpg" alt="imagen" />

❌ <img src="doctor.jpg" alt="" />
<!-- sin alt text -->
```

### Nombres de Archivo

```
✅ operacion-miopia-laser-lasik.jpg
✅ equipo-medico-instituto-oftalmologico.jpg

❌ IMG_1234.jpg
❌ foto.jpg
```

## 5. Keywords y Densidad

### Keywords Principales para el Sitio

- oftalmólogo Tenerife
- clínica oftalmológica Santa Cruz
- cirugía ocular Tenerife
- operación cataratas
- operación miopía
- tratamiento glaucoma
- cirugía refractiva
- láser femtosegundo

### Densidad Recomendada

- **Densidad total**: 1-2% del texto (evitar keyword stuffing)
- **Ubicaciones importantes**:
  - Título (H1)
  - Primeros 100 palabras del contenido
  - Un H2 o H3
  - Meta description
  - Alt text de una imagen
  - URL (slug)

### Variaciones y Long-tail Keywords

```
Keyword principal: "operación de miopía"

Variaciones:
- cirugía de miopía
- operación láser miopía
- corrección de miopía con láser
- operación de miopía en Tenerife
- precio operación miopía Tenerife
```

## 6. Internal Linking

### Estrategia

- **Enlaces contextuales**: Enlazar dentro del contenido de forma natural
- **Anchor text descriptivo**: Usar texto descriptivo en lugar de "clic aquí"
- **Profundidad de página**: Las páginas importantes no deberían estar a más de 3 clics desde la home

### Ejemplos

```html
✅
<a href="/especialidades/operacion-miopia"
  >Descubre más sobre la operación de miopía</a
>

✅ Nuestro
<a href="/quienes-somos/equipo">equipo de oftalmólogos expertos</a> está a tu
disposición. ❌ <a href="/contacto">Haz clic aquí</a> para contactar ❌
<a href="/blog">Leer más</a>
<!-- demasiado genérico -->
```

### Estructura de Enlaces Internos

```
Home Page
├── Especialidades
│   ├── Operación de Miopía
│   ├── Operación de Cataratas
│   └── Tratamiento de Glaucoma
├── Quiénes Somos
│   ├── Equipo
│   ├── Historia
│   └── Centro
├── Blog
│   └── [Artículos individuales]
└── Contacto
```

## 7. URLs (Slugs)

### Características de URLs Amigables

- **Cortas y descriptivas**
- **Incluir keywords principales**
- **Usar guiones (-) para separar palabras**
- **Solo minúsculas**
- **Sin caracteres especiales**

### Ejemplos

```
✅ /especialidades/operacion-miopia
✅ /blog/que-es-el-glaucoma-infantil
✅ /quienes-somos/equipo

❌ /page?id=123
❌ /Especialidades/Operación_Miopía
❌ /esp/op-miop
```

## 8. Contenido de Calidad

### Características

- **Longitud mínima**: 300 palabras para páginas normales, 800+ para artículos de blog
- **Original**: Evitar contenido duplicado
- **Actualizado**: Revisar y actualizar contenido antiguo
- **Valor para el usuario**: Responder preguntas y resolver problemas

### Estructura de un Artículo de Blog Optimizado

1. **Introducción** (100-150 palabras)
   - Presentar el tema
   - Incluir keyword principal
2. **Desarrollo** (dividido en secciones con H2/H3)
   - Contenido detallado y útil
   - Incluir variaciones de keywords
   - Usar listas y tablas cuando sea apropiado
   - Incluir imágenes relevantes

3. **Conclusión** (100 palabras)
   - Resumir puntos principales
   - Call-to-action

4. **Preguntas Frecuentes** (opcional pero recomendado)
   - 3-5 preguntas comunes
   - Implementar FAQPage schema

## 9. Structured Data (Schema.org)

### Tipos de Schema Implementados

#### MedicalClinic (HomePage)

```javascript
{
  "@type": "MedicalClinic",
  "name": "Instituto Oftalmológico Amigó",
  "address": {...},
  "telephone": "+34-922-535-971",
  "openingHours": "Mo-Fr 09:00-20:00"
}
```

#### Article (Blog Posts)

```javascript
{
  "@type": "NewsArticle",
  "headline": "Título del artículo",
  "author": {...},
  "datePublished": "2024-01-01",
  "image": [...]
}
```

#### BreadcrumbList

```javascript
{
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

## 10. Checklist de SEO para Nueva Página

Antes de publicar una nueva página, verifica:

- [ ] Título único y optimizado (50-60 caracteres)
- [ ] Meta description única y atractiva (150-160 caracteres)
- [ ] Keywords identificadas y usadas naturalmente
- [ ] Un solo H1 con keyword principal
- [ ] Estructura de headings lógica (H1 > H2 > H3)
- [ ] Todas las imágenes tienen alt text descriptivo
- [ ] URL amigable y descriptiva
- [ ] Al menos 2-3 enlaces internos relevantes
- [ ] Contenido original y de calidad (mínimo 300 palabras)
- [ ] JSON-LD structured data implementado
- [ ] Canonical URL configurado
- [ ] Open Graph tags completos
- [ ] Twitter Cards configurados

## 11. Herramientas de Verificación

### Google Tools

- **Google Search Console**: Monitorear rendimiento y errores
- **Google Rich Results Test**: Validar structured data
- **Google PageSpeed Insights**: Medir rendimiento

### Otras Herramientas

- **Facebook Sharing Debugger**: Verificar Open Graph
- **Twitter Card Validator**: Verificar Twitter Cards
- **Screaming Frog**: Auditoría completa del sitio
- **Lighthouse**: Auditoría SEO integrada en Chrome DevTools

## 12. Mejores Prácticas para Contenido Médico

### E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

Google valora especialmente estos factores en contenido médico:

- **Experience**: Experiencia práctica del autor
- **Expertise**: Conocimiento experto en el tema
- **Authoritativeness**: Autoridad reconocida en el campo
- **Trustworthiness**: Confiabilidad de la información

### Recomendaciones

- Citar fuentes médicas confiables
- Incluir información del autor (médico especialista)
- Actualizar información médica regularmente
- Ser transparente sobre tratamientos y procedimientos
- Incluir disclaimers apropiados

---

## Recursos Adicionales

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Medical Types](https://schema.org/MedicalEntity)
- [Moz SEO Learning Center](https://moz.com/learn/seo)

**Última actualización**: Noviembre 2025
