// this function searches for a specific character in the string and returns the string preceding that character.
export default function stringExtractor(str, char) {
  const index = str.indexOf(char);
  return index !== -1 ? str.slice(0, index).trim() : str.trim();
}
