//this function removes spaces within a string and returns the string with the underscore instead of the spaces
export default function spaceRemover(str) {
  return str.replace(/\s+/g, "_");
}
