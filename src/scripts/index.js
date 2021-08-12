import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/responsive.scss";
import swRegister from "./utils/sw-register";
import App from "./views/app";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navDrawer"),
  content: document.querySelector("#content"),
  header: document.querySelector("header"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
