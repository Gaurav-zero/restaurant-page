export function displayContact(){
    const contentContainer= document.querySelector("#content");
    
    const contactHeading= document.createElement("h1");
    contactHeading.textContent= "Contact Us";

    contentContainer.appendChild(contactHeading);
}