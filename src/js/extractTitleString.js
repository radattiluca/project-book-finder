// Funzione per ottenere la parte del titolo fino al carattere "-"
function extractTitleString(str, char) {
  const index = str.indexOf(char);
  return index !== -1 ? str.slice(0, index).trim() : str.trim();
}
module.exports = extractTitleString;
