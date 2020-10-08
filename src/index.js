import _ from "lodash"; // lodash, 现在由此脚本引入

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
