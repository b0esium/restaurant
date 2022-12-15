import Restaurant from "./restaurant.jpeg";

function pageLoad() {
  let content = document.getElementById("content");

  // title
  let title = document.createElement("h1");
  title.innerText = "Cyber-Renaissance";
  content.appendChild(title);

  // navigation
  let nav = document.createElement("div");
  content.appendChild(nav);

  let menuLink = document.createElement("a");
  menuLink.setAttribute("id", "menuLink");
  menuLink.href = "";
  let menu = document.createElement("h3");
  menu.innerText = "Menu";
  nav.appendChild(menuLink);
  menuLink.appendChild(menu);

  let contactLink = document.createElement("a");
  contactLink.setAttribute("id", "contactLink");
  contactLink.href = "";
  let contact = document.createElement("h3");
  contact.innerText = "Contact";
  nav.appendChild(contactLink);
  contactLink.appendChild(contact);

  // image
  let homeImg = new Image();
  homeImg.src = Restaurant;
  content.appendChild(homeImg);
}

export default pageLoad;
