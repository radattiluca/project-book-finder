/** In this function the URL is generated with the data entered by the visitor*/
import spaceRemover from "../components/jsComponents/spaceRemover";

export default function generateUrl(categoryForm, valueInput) {
  /**the valueInput constant takes the value typed by the user in the textbox and first removes the outer spaces of the string with .trim() and then converts the string to lowercase. */
  valueInput = categoryForm.value.trim().toLowerCase();
  console.log(valueInput);
  if (valueInput === "") {
    alert("Enter a category first");
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
