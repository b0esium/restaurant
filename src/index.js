import "./style.css";
import pageLoad from "./page-load";
import menu from "./menu/menu";
import contact from "./contact/contact";

pageLoad();

let content = document.getElementById("content");

let menuLink = document.getElementById("menuLink");
menuLink.addEventListener("click", (event) => switchTab(event, menu));

let contactLink = document.getElementById("contactLink");
contactLink.addEventListener("click", (event) => switchTab(event, contact));

function switchTab(event, tab) {
  event.preventDefault();
  content.lastChild.remove();
  tab();
}
