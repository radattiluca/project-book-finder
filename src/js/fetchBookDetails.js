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
  return axios.get(newUrlDetails).then((response) => {
    // Check if the response status is what you expect
    if (response.status !== 200) {
      throw new Error(
        `Request failed in fetchBookDetails with status ${response.status}`
      );
    }
    const respDetails = response.data;
    console.log(respDetails.description); // Debug

    containerResult.innerHTML = "";
    containerCoverBook.innerHTML = "";

    setTimeout(() => {
      handleDescription(respDetails, valueLi, containerResult);
    }, 2000);

    containerCoverBook.innerHTML += `<img src="https://covers.openlibrary.org/b/id/${numCover}-M.jpg?default=true" alt="${valueLi}">`;
  });
}
