// index.js
import restaurantImage from "./restaurantImage.avif"
import { displayMenu } from "./menu.js";
import { displayHome } from "./pageLoad.js";
import { displayContact } from "./contact.js";
import "./pageLoad.js";
import "./styles.css";
import { greeting } from "./greeting.js";

const menuBtn= document.querySelector("#menu");
const homeBtn= document.querySelector("#home");
const contactBtn= document.querySelector("#contact");
const contentContainer= document.querySelector("#content");

function clearDiv(){
    while(contentContainer.firstChild){
        contentContainer.removeChild(contentContainer.firstChild);
    }
}

displayHome();

menuBtn.addEventListener("click", (e) => {
    clearDiv();
    displayMenu();
});

homeBtn.addEventListener("click", (e) => {
    clearDiv();
    displayHome();
});

contactBtn.addEventListener("click", (e) =>{
    clearDiv();
    displayContact();
});