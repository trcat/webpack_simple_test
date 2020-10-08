function getComponent() {
  return Promise.all([
    import(/* webpackChunkName: "lodash" */ "lodash"),
    import(/* webpackChunkName: "print" */ "./print.js"),
  ])
    .then((data) => {
      var element = document.createElement("div");
      var button = document.createElement("button");

      element.innerHTML = data[0].join(["Hello", "webpack"], " ");

      button.innerHTML = "Click me and check the console!";
      button.onclick = data[1].default

      element.appendChild(button);

      return element;
    })
    .catch((error) => "An error occurred while loading the component");
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
