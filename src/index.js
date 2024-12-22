import { home } from "./homepage.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");
const content = document.querySelector("#content");

content.appendChild(home());

homeTab.addEventListener("click", ()=>{
    content.textContent = "";
    content.appendChild(home());
});

menuTab.addEventListener("click", ()=>{
    content.textContent = "";
    content.appendChild(menu());
});

contactTab.addEventListener("click", ()=>{
    content.textContent = "";
    content.appendChild(contact());
});

})
