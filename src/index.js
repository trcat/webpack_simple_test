import "babel-polyfill";
import "./scss/style.scss";
import { cube } from "./component/math.js";

function component() {
  var element = document.createElement("pre");

  element.innerHTML = ["Hello webpack", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
