import "../scss/style.scss";
import "../scss/styleSearchBar.scss";
import extractTitleString from "../js/extractTitleString";
import axios from "axios";
import _ from "lodash";

const containerResult = document.querySelector(".containerTitleAuthors");
const containerCoverBook = document.querySelector(".containerCoverBook");
const categoryForm = document.querySelector("#category");
let collectedData = [];

document.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.tagName);
    event.preventDefault();
    let valueInput = categoryForm.value.toLowerCase();
    // Generate the URL based on the input provided by the client
    let newUrl = new URL(
      `${valueInput}.json`,
      "https://openlibrary.org/subjects/"
    );

    // Axios request to the API at https://openlibrary.org for the category chosen by the user
    axios
      .get(newUrl)
      .then((response) => {
        let resp = response.data; // Access response data

        let authors = _.get(resp, "works", []); // Extract the array of objects containing authors and book titles

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
          return collectedData;
        });

        console.log(collectedData[0].title);
        // Populate the containerResult with the titles and authors of the books from the category entered by the user
        containerResult.innerHTML += `<li>${objTitle} - ${objAuthors} </li>`;
      })
      // Handle errors when fetching data
      .catch((error) => {
        console.error(error);
        console.log("qui gestiamo l'errore");
      });
  }
  if (event.target.tagName === "LI") {
    // Handle the event when a book is clicked
    let keyBook = "";
    let numCover = "";

    let valueLi = event.target.textContent; // Retrieve the name from the clicked <li>

    // Extract the string before the "-" character to get only the book title without the author

    const extractedTitle = extractTitleString(valueLi, " - ");
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
      console.log("Book not found");
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
            containerResult.innerHTML += `<p> <h3>${valueLi}</h3>${respDetails.description.value} </p>`;
          } else {
            containerResult.innerHTML += `<p> <h3>${valueLi}</h3>${respDetails.description} </p>`;
          }
        }, 2000);
        containerCoverBook.innerHTML += `<img src="https://covers.openlibrary.org/b/id/${numCover}-M.jpg" alt="${valueLi}">`;
      })

      .catch((error) => {
        console.error(error);
        console.log("qui gestiamo l'errore");
      });
  }
});
