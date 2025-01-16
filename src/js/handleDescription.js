import stringExtractor from "./stringExtractor";

export default function handleDescription(
  respDetails,
  valueLi,
  containerResult
) {
  // Reset container
  containerResult.innerHTML = "";

  if (!respDetails.description) {
    // Caso: Descrizione assente
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
    // Caso: Descrizione come oggetto
    containerResult.innerHTML += `
      <p>
        <h3>${valueLi}</h3>
        ${respDetails.description.value}
      </p>`;
  } else {
    // Caso: Descrizione come stringa, estrazione parziale
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
