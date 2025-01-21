/** This function creates a new image object to insert the image B of the Book Finder title and insert it inside the index.js file and then attach it inside the header*/

import logoImg from "./logo-book-finder-dark.png";
import "./styleLogo.scss";

function logoFn() {
  const logoDomImage = new Image();
  logoDomImage.src = logoImg;
  logoDomImage.className = "my-logo";
  console.log(logoDomImage);
  return logoDomImage;
}

export default logoFn;
