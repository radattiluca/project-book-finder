/**This function makes an API request and manages data to display a list of book titles and authors of the category selected by the user */
import _ from "lodash"; ///to use the _.get method
import axios from "axios";
export default function fetchAuthors(
  newUrl,
  containerResult,
  containerCoverBook,
  collectedData
) {
  return axios
    .get(newUrl)
    .then((response) => {
      // Check if the response status is what you expect
      if (response.status !== 200) {
        alert("Oops something went wrong");
        throw new Error(
          `Request failed in fetchAuthors with status ${response.status}`
        );
      }
      const resp = response.data; // Access response data
      console.log(resp); // Debug

      const authors = _.get(resp, "works", []); // Extract the array of objects containing authors and book titles

      if (authors.length === 0) {
        alert("The category entered is invalid");
        throw new Error("The category entered is invalid");
      }

      console.log(authors); // Debug
      containerCoverBook.innerHTML = "";
      containerResult.innerHTML = "";

      // Iterate over the authors array to populate `collectedData` and update the DOM
      authors.forEach((element) => {
        const objAuthors = _.get(element, "authors[0].name", "Unknown");
        const objTitle = _.get(element, "title", "Unknown");
        const objKey = _.get(element, "key", "Unknown");
        const objIdCover = _.get(element, "cover_id", "Unknown");

        // Create an array of objects with corresponding title, author, and key
        collectedData.push({
          title: objTitle,
          authors: objAuthors,
          key: objKey,
          coverId: objIdCover,
        });

        // Populate the containerResult with titles and authors
        containerResult.innerHTML += `<li id="${objKey}">${objTitle} - ${objAuthors}</li>`;
      });
      return { collectedData, containerResult, containerCoverBook };
    })
    .catch((error) => {
      console.error("Error fetching authors:", error.message);
      throw new Error(error.message);
    });
}
