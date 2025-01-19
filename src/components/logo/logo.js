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
