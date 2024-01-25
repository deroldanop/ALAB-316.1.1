import "./styles.css";

let color = document.querySelector(":root");
//let color = getComputedStyle(':root').getPropertyValue("--main-bg");
color.getPropertyValue("--main-bg");

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = color.getPropertyValue("--main-bg");
//mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.classList.add("flex-ctr");
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = color;
topMenuEl.classList.add("flex-around");

const menuLinks = [
  { text: "Home", href: "#" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Contact", href: "#contact" },
];

const topMenuEl = document.querySelector("#top-menu");
menuLinks.forEach((link) => {
  const linkElement = document.createElement("a");

  linkElement.href = link.href;

  linkElement.textContent = link.text;

  topMenuEl.appendChild(linkElement);
});