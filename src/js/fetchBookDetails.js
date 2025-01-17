/** This function makes an API request to get data for the book description. Furthermore, by managing the numCover variable we extract the cover_id which we insert into the image URL to obtain the cover*/
import handleDescription from "./handleDescription";
import axios from "axios";
export default function fetchBookDetails(
  newUrlDetails,
  valueLi,
  numCover,
  containerResult,
  containerCoverBook
) {
  axios
    .get(newUrlDetails)
    .then((response) => {
      const respDetails = response.data;
      console.log(respDetails.description); // Debug

      containerResult.innerHTML = "";

      setTimeout(() => {
        handleDescription(respDetails, valueLi, containerResult);
      }, 2000);

      containerCoverBook.innerHTML += `<img src="https://covers.openlibrary.org/b/id/${numCover}-M.jpg?default=true" alt="${valueLi}">`;
    })
    .catch((error) => {
      console.error("Error fetching book details:", error.message);
      throw new Error(error.message);
    });
}
