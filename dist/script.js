import fetchAnimals from "./modules/fetchAnimals.js";
import renderListOfAnimals from "./modules/renderListOfAnimals.js";
let listOfAnimals = [];
async function init() {
    const animals = await fetchAnimals();
    console.log("Fetched animals:", animals);
    if (animals) {
        renderListOfAnimals(animals);
    }
}
init();
