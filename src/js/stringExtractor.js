// Funzione per ottenere la parte del titolo fino al carattere "-"
export default function stringExtractor(str, char) {
  const index = str.indexOf(char);
  return index !== -1 ? str.slice(0, index).trim() : str.trim();
}
