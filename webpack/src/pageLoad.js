import restaurantImg from "./restaurantImage.avif";

const mainHeading= document.createElement("h1");
const restaurantImage= document.createElement("img");
const aboutFood= document.createElement("h2");
const contentContainer= document.querySelector("#content");

mainHeading.textContent= "HOT FOOD FOR HOT PEOPLE";
restaurantImage.src=restaurantImg;
aboutFood.textContent= '"Looks Good, tastes good and feels good. We create your food with care and creativity"';

contentContainer.appendChild(mainHeading);
contentContainer.appendChild(restaurantImage);
contentContainer.appendChild(aboutFood);


