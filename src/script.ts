import fetchAnimals from "./modules/fetchAnimals.ts";
import { Animal } from "./modules/IAnimal.ts";
import renderListOfAnimals from "./modules/renderListOfAnimals.ts";

let listOfAnimals : Animal[] = [];

async function init() {
  const animals = await fetchAnimals();

  console.log("Fetched animals:", animals);
  if (animals) {
    renderListOfAnimals(animals);  
  }
}



init();
