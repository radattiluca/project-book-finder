/** In this function the URL is generated with the data entered by the visitor*/
import spaceRemover from "./spaceRemover";

export default function generateUrl(categoryForm) {
  // Ottieni e normalizza l'input dell'utente
  let valueInput = categoryForm.value.toLowerCase();

  if (valueInput === "") {
    throw new Error("Enter a category first");
  }

  if (valueInput.includes(" ")) {
    console.log("Include space"); // Per il debug
    valueInput = spaceRemover(valueInput);
    console.log(valueInput); // Per il debug
  }

  // Genera e restituisci l'URL
  return new URL(`${valueInput}.json`, "https://openlibrary.org/subjects/");
}
