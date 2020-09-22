import React from "react";
import { render } from "react-dom";
import "./styles";
import App from "./App";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#app")
);

if (module.hot) {
  module.hot.accept();
}
// Allow mobile webkit devices to see :active styles on tap
document.addEventListener("touchstart", function () {}, true);
