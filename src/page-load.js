import Restaurant from "./restaurant.jpeg";

function pageLoad() {
  let content = document.getElementById("content");

  // title
  let title = document.createElement("h1");
  title.innerText = "Cyber-Renaissance";
  content.appendChild(title);

  // image
  let image = new Image();
  image.src = Restaurant;
  content.appendChild(image);
}

export default pageLoad;
