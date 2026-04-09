//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter
import renderAnimalInfo from "./renderAnimalInfo.js";
let animalList = document.getElementsByClassName("list-of-animals")[0];
export default function renderListOfAnimals(animals) {
    animals.forEach(animal => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute('href', '#');
        link.textContent = animal.name;
        listItem.appendChild(link);
        animalList?.children[0]?.appendChild(listItem);
        listItem.addEventListener("click", () => renderAnimalInfo(animal));
    });
}
