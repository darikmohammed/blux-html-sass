//mobile menu display
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = () => {
  nav.classList.add("nav");
};
closeBtn.onclick = () => {
  nav.classList.remove("nav");
};
