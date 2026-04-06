//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar

import { Animal } from "./IAnimal";
const BASE_URL = "http://localhost:3000/animals";

export default async function fetchAnimals(): Promise<Animal[] | null> {
    try {
        const response = await fetch(BASE_URL);
        if (response.ok) {
            const data: Animal[] = await response.json();
            return data;
        }
    }
    catch (error) {
        console.error("Error fetching animals:", error);
    }
    return null;
}