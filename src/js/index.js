import "../styleScss/indexStyle.scss";
import stringExtractor from "../components/jsComponents/stringExtractor.js";
import goBack from "../components/jsComponents/goBack.js";

import generateUrl from "./generateUrl";
import fetchBookDetails from "./fetchBookDetails";
import fetchAuthors from "./fetchAuthors";
import detailsUrlDescription from "./detailsUrlDescription";

//import axios from "axios";
import _ from "lodash";
const containerEvent = document.querySelector(".wrapperColumn");
const containerResult = document.querySelector(".containerTitleAuthors");
const containerCoverBook = document.querySelector(".containerCoverBook");
const categoryForm = document.querySelector("#category");
const buttonGoBack = document.querySelector(".goBack");

const collectedData = [];

import logoFn from "../components/logo/logo.js";
const containerLogo = document.querySelector(".containerLogo");

if (!containerLogo.querySelector(".my-logo")) {
  containerLogo.appendChild(logoFn());
}

import iconFn from "../components/logo/iconMySite.js";
const containerIcon = document.querySelector(".row-social-footer");

if (!containerIcon.querySelector(".my-icon")) {
  containerIcon.appendChild(iconFn());
}

// Prevenire la duplicazione del listener
if (!window.isEventListenerAttached) {
  window.isEventListenerAttached = true;

  containerEvent.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      //user click on the search button
      console.log(event.target.tagName); //for debugging
      event.preventDefault(); //to block the default submit event
      /**the valueInput constant takes the value typed by the user in the textbox and first removes the outer spaces of the string with .trim() and then converts the string to lowercase. */
      const valueInput = categoryForm.value.trim().toLowerCase();
      /**this if returns an error if the user does not enter a category and presses the search button */
      if (!valueInput) {
        throw new Error("Enter a category first");
      }
      //we generate the url with the generateUrl function
      const newUrl = generateUrl(categoryForm);
      //console.log(newUrl); //for debugging
      //console.log(valueInput); //for debugging

      /**we send the fetch .get request with axios at https://openlibrary.org via the fetchAuthors function */
      fetchAuthors(
        newUrl,
        containerResult,
        containerCoverBook,
        collectedData
      ).then((response) => {});
    }
    if (event.target.tagName === "LI") {
      //the user clicks on a LI containing the title of the book and the author

      /**the variable valueLi takes the value containing in the clicked LI element */
      let valueLi = event.target.textContent;

      /**We extract the entire string before the "-" character to have only the title of the book without the author, using the stringExtractor function */
      const extractedTitle = stringExtractor(valueLi, " - ");
      console.log(extractedTitle); //for debugging

      /**We compare the string extracted in the extract Title constant with the Data collection array to find a reference with the title selected by the user. */
      const foundBook = collectedData.find((element) =>
        element.title.toLowerCase().includes(extractedTitle.toLowerCase())
      );
      console.log(foundBook); //for debugging

      /**from the correspondence found, the identification key of the book and the number identified for the book cover are returned */
      const { keyBook, numCover } = detailsUrlDescription(foundBook);

      console.log(keyBook); //for debuggin
      console.log(numCover); //for debuggin

      /**the book key is used to create the url and send a new fetch request for the details of the book selected by the user */
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
        /**If the request is successful, the response is handled in fetchBookDetails and the description with the respective book cover is displayed */
        .then((response) => {})
        .catch((error) => {
          console.error("Error fetching book details:", error.message);
          throw new Error(error.message);
        });
    }
    /**with the goback function combined with the creation of a dynamic button that appears only after viewing the book description, we can go back to the titles. */
    if (event.target.className === "goBack") {
      buttonGoBack.style.display = "none";
      goBack(containerResult, containerCoverBook);
    }
  });
}
