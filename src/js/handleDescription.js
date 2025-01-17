/** In this function we manage the description in the various cases that may occur to us*/
import stringExtractor from "./stringExtractor";

export default function handleDescription(
  respDetails,
  valueLi,
  containerResult
) {
  // Reset container
  containerResult.innerHTML = "";

  if (!respDetails.description) {
    // Case: Description absent
    containerResult.innerHTML += `
      <p>
        <h3>Description ${valueLi}</h3>
        Descrizione non presente, per maggiori info visitare il sito: 
        <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer">openLibrary.org</a>
      </p>`;
  } else if (
    typeof respDetails.description === "object" &&
    respDetails.description.value
  ) {
    // Case: Description as object
    containerResult.innerHTML += `
      <p>
        <h3>${valueLi}</h3>
        ${respDetails.description.value}
      </p>`;
  } else {
    // Case: Description as string, partial extraction
    const extractedDetails = stringExtractor(
      respDetails.description,
      "Also contained in"
    );
    containerResult.innerHTML += `
      <p>
        <h3>${valueLi}</h3>
        ${extractedDetails}
      </p>`;
  }
}
