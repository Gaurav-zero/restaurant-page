import restaurantImg from "./restaurantImage.avif";

export function displayHome(){
    const mainHeading= document.createElement("h1");
    const restaurantImage= document.createElement("img");
    const aboutFood= document.createElement("h2");
    const contentContainer= document.querySelector("#content");
    const homePage= document.createElement("div");

    mainHeading.textContent= "HOT FOOD FOR HOT PEOPLE";
    restaurantImage.src=restaurantImg;
    aboutFood.textContent= '"Looks Good, tastes good and feels good. We create your food with care and creativity"';

    homePage.appendChild(mainHeading);
    homePage.appendChild(restaurantImage);
    homePage.appendChild(aboutFood);

    contentContainer.appendChild(homePage);

}




