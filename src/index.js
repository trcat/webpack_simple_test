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

function flexComponent() {
  const element = document.createElement("div");

  element.classList.add("flex");

  for (let i = 0; i < 2; i++) {
    const item = document.createElement("div");
    item.classList.add("flex-item");
    element.appendChild(item);
  }

  return element;
}

document.body.append(component(), flexComponent());
