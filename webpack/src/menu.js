export function displayMenu(){
    const contentContainer= document.querySelector("#content");

    const menuPage= document.createElement("div")

    const menuHeading= document.createElement("h1");
    const beverageHeading= document.createElement("h2");
    const sidesHeading= document.createElement("h2");
    const mainsHeading= document.createElement("h2");

    menuHeading.textContent= "MENU";
    menuPage.appendChild(menuHeading);

    beverageHeading.textContent= "Beverages";
    menuPage.appendChild(beverageHeading);

    const beverages= document.createElement("ul");
    const b1= document.createElement("li");
    b1.textContent= "Guinness";
    const b2= document.createElement("li");
    b2.textContent= "Virgin Dachary";
    beverages.appendChild(b1);
    beverages.appendChild(b2);
    menuPage.appendChild(beverages);    
    
    contentContainer.appendChild(menuPage);
}