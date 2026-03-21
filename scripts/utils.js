export function normalizeText(text) {
  return (text || '')
    .toString()
    .normalize('NFD') // separa letras y tildes
    .replace(/[\u0300-\u036f]/g, '') // elimina los signos diacríticos (tildes)
    .replace(/\s+/g, ' ') // normaliza espacios
    .replace(/–/g, '-') // normaliza guiones
    .replace(/[“”]/g, '"') // comillas
    .replace(/[‘’]/g, "'") // apóstrofes
    .trim();
}

// --- Función de chunking ---
export function chunkText(text, maxLength = 800) {
  const sentences = text.match(/[^.!?]+[.!?]*/g) || [text];
  const chunks = [];
  let current = '';

  for (const sentence of sentences) {
    if ((current + sentence).length > maxLength) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }

  if (current) chunks.push(current.trim());
  return chunks;
}

export const logger = {
  info: (msg) => console.log(`ℹ️ %c${msg}`, 'color: blue'),
  success: (msg) => console.log(`✅ %c${msg}`, 'color: green'),
  warn: (msg) => console.log(`⚠️ %c${msg}`, 'color: orange'),
  error: (msg, err) => console.log(`❌ %c${msg} - err: %c${err}`, 'color: red'),
};
