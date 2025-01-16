import "../scss/style.scss";
import "../scss/styleSearchBar.scss";
import stringExtractor from "./stringExtractor";
import spaceRemover from "./spaceRemover";
import axios from "axios";
import _ from "lodash";

const containerResult = document.querySelector(".containerTitleAuthors");
const containerCoverBook = document.querySelector(".containerCoverBook");
const categoryForm = document.querySelector("#category");
const collectedData = [];

document.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.tagName); //per il debug
    event.preventDefault();
    /**Here we take the valueInput value and pass it through conditions to make it arrive perfect when inserted into the URL */
    let valueInput = categoryForm.value.toLowerCase();
    if (valueInput === "") {
      throw new Error("Enter a category first");
    }
    if (valueInput.includes(" ")) {
      console.log("Include space"); //per il debug
      valueInput = spaceRemover(valueInput);
      console.log(valueInput); //per il debug
    }
    // Generate the URL based on the input provided by the client
    let newUrl = new URL(
      `${valueInput}.json`,
      "https://openlibrary.org/subjects/"
    );

    console.log(valueInput);
    // Axios request to the API at https://openlibrary.org for the category chosen by the user
    axios.get(newUrl).then((response) => {
      let resp = response.data; // Access response data
      console.log(resp); //for debug

      let authors = _.get(resp, "works", []); // Extract the array of objects containing authors and book titles
      if (authors.length === 0) {
        throw new Error("the category entered is invalid");
      }
      console.log(authors);
      containerCoverBook.innerHTML = "";
      containerResult.innerHTML = "";
      // Iterate over the authors array to get titles, authors, and keys
      authors.forEach((element) => {
        let objAuthors = _.get(element, "authors[0].name", "unknown");
        let objTitle = _.get(element, "title", "unknown");
        let objKey = _.get(element, "key", "unknown");
        let objIdCover = _.get(element, "cover_id", "unknown");
        // Create an array of objects with corresponding title, author, and key
        collectedData.push({
          title: objTitle,
          authors: objAuthors,
          key: objKey,
          coverId: objIdCover,
        });
        // Populate the containerResult with the titles and authors of the books from the category entered by the user
        containerResult.innerHTML += `<li>${objTitle} - ${objAuthors} </li>`;
      });
    });
  }
  if (event.target.tagName === "LI") {
    // Handle the event when a book is clicked
    let keyBook = "";
    let numCover = "";

    let valueLi = event.target.textContent; // Retrieve the name from the clicked <li>

    // Extract the string before the "-" character to get only the book title without the author

    const extractedTitle = stringExtractor(valueLi, " - ");
    console.log(extractedTitle);

    // Compare the extracted string with the collectedData array
    const foundBook = collectedData.find(
      (element) => element.title === extractedTitle
    );
    // If a match is found, return the key associated with the book; otherwise, display an error message

    if (foundBook) {
      console.log("Book found:", foundBook.key);
      console.log("Number cover id found:", foundBook.coverId);
      keyBook = foundBook.key;
      numCover = foundBook.coverId;
    } else {
      throw new Error("Book not found");
    }
    // Generate the URL based on the client's click on a title

    let newUrlDetails = new URL(
      `${keyBook}.json?details=true`,
      "https://openlibrary.org/"
    );
    // Make a request to the API for the book's description

    axios
      .get(newUrlDetails)
      .then((response) => {
        let respDetails = response.data;
        const extractedDetails = "";
        console.log(respDetails.description);

        console.log(extractedDetails);
        containerResult.innerHTML = "";
        // Handle cases where respDetails is not present or is indirectly contained in the response
        setTimeout(() => {
          if (respDetails.description === undefined) {
            containerResult.innerHTML += `<p><h3>Description ${valueLi}</h3>
        Descrizione non presente, per maggiori info visitare il sito: 
        <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer">openLibrary.org</a>
      </p>`;
          } else if (
            typeof respDetails.description === "object" &&
            respDetails.description.value
          ) {
            console.log(respDetails.description.value); //for debug
            containerResult.innerHTML += `<p> <h3>${valueLi}</h3>${respDetails.description.value} </p>`;
          } else {
            const extractedDetails = stringExtractor(
              respDetails.description,
              "Also contained in"
            );
            containerResult.innerHTML += `<p> <h3>${valueLi}</h3>${extractedDetails} </p>`;
          }
        }, 2000);
        containerCoverBook.innerHTML += `<img src="https://covers.openlibrary.org/b/id/${numCover}-M.jpg" alt="${valueLi}">`;
      })

      .catch((error) => {
        console.error(error.message);
        throw err;
      });
  }
});
