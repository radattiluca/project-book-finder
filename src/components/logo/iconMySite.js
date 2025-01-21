import iconImg from "./icon-footer-lr-web-site.png";
import "./styleIconMS.scss";

function iconFn() {
  const iconDomImage = new Image();
  iconDomImage.src = iconImg;
  iconDomImage.className = "my-icon";
  console.log(iconDomImage);
  return iconDomImage;
}

export default iconFn;
