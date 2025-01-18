import "../scss/styleMobile.scss";
import "../scss/styleSearchBar.scss";
import "../scss/footer.scss";
import stringExtractor from "./stringExtractor";
//import spaceRemover from "./spaceRemover";
//import handleDescription from "./handleDescription";
import generateUrl from "./generateUrl";
import fetchBookDetails from "./fetchBookDetails";
import fetchAuthors from "./fetchAuthors";
import detailsUrlDescription from "./detailsUrlDescription";

//import axios from "axios";
import _ from "lodash";

const containerResult = document.querySelector(".containerTitleAuthors");
const containerCoverBook = document.querySelector(".containerCoverBook");
const categoryForm = document.querySelector("#category");
const collectedData = [];

document.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.tagName);
    event.preventDefault(); //to block the default submit event

    const valueInput = categoryForm.value.trim().toLowerCase();

    if (!valueInput) {
      throw new Error("Enter a category first");
    }
    //generate the url
    const newUrl = generateUrl(categoryForm);
    console.log(newUrl); //for debugging

    console.log(valueInput);
    // Axios request to the API at https://openlibrary.org for the category chosen by the user
    fetchAuthors(
      newUrl,
      containerResult,
      containerCoverBook,
      collectedData
    ).then((response) => {});
  }
  if (event.target.tagName === "LI") {
    // Handle the event when a book is clicked

    let valueLi = event.target.textContent; // Retrieve the name from the clicked <li>

    // Extract the string before the "-" character to get only the book title without the author
    const extractedTitle = stringExtractor(valueLi, " - ");
    console.log(extractedTitle);

    // Compare the extracted string with the collectedData array
    const foundBook = collectedData.find((element) =>
      element.title.toLowerCase().includes(extractedTitle.toLowerCase())
    );
    console.log(foundBook);

    //for debugging
    // If a match is found, return the key associated with the book; otherwise, display an error message
    const { keyBook, numCover } = detailsUrlDescription(foundBook);
    // Generate the URL based on the client's click on a title
    //console.log(keyBook);
    //console.log(numCover);
    let newUrlDetails = new URL(
      `${keyBook}.json?details=true`,
      "https://openlibrary.org/"
    );
    // Make a request to the API for the book's description
    fetchBookDetails(
      newUrlDetails,
      valueLi,
      numCover,
      containerResult,
      containerCoverBook
    )
      .then((response) => {})
      .catch((error) => {
        console.error("Error fetching book details:", error.message);
        throw new Error(error.message);
      });
  }
});
