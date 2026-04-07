//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter

import { Animal } from "./IAnimal";

const animalInfoContainer: HTMLDivElement = document.getElementsByClassName( "animal-info" )[0] as HTMLDivElement;


export default function renderAnimalInfo(animal: Animal) {
  //=====================================================//
  clearAnimalInfo();
  
  //Rendera ut bilden på djuret
  const imgAttr = document.createElement( "img" );
  imgAttr.setAttribute( "src", `./images/${animal.imageUrl}` );
  animalInfoContainer.appendChild( imgAttr );

  //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
  const nameAttr = document.createElement( "p" );
  nameAttr.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
  nameAttr.classList.add( "animal-name" );
  animalInfoContainer.appendChild( nameAttr );

  //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
  //Följ formatet: "Trash Analyst - Currently (not) employed"
  //Använd template literals
  const jobAttr = document.createElement( "p" );
  if ( !animal.employmentEndDate ) {
    jobAttr.textContent = `${animal.job} - Currently employed`;
  } else {
    jobAttr.textContent = `Currently not employed`;
  }
  jobAttr.classList.add( "animal-job" );
  animalInfoContainer.appendChild( jobAttr );

  //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
  //Följ formatet:  Age: 9 years old.
  //Använd template literals
  //Bonus om du skriver ut rubriken "Age" med CSS.
  const age = new Date().getFullYear() - parseInt(animal.birthYear);
  const ageAttr = document.createElement( "span" );
  ageAttr.classList.add( "animal-age" );
  ageAttr.textContent = `${age} years old`;
  
  animalInfoContainer.appendChild( ageAttr );


  //Skriv ut en lista på djurets färdigheter
  //Följ formatet:    Skills:
  //                  Flying
  //                  Eating
  if ( !animal.skills ) {
    return;
  }

  if ( Array.isArray( animal.skills )  ) {
    const skillsAttr = document.createElement( "ul" );
    animal.skills.forEach( skill => {
      const skillItem = document.createElement( "li" );
      skillItem.textContent = skill;
      skillsAttr.classList.add( "animal-skills" );
      skillsAttr.appendChild( skillItem );
    });
    animalInfoContainer.appendChild( skillsAttr );
  } else {
    const skillsAttr = document.createElement( "span" );
    skillsAttr.textContent = animal.skills;
    skillsAttr.classList.add( "animal-skills" );
    animalInfoContainer.appendChild( skillsAttr );
  }
}

function clearAnimalInfo() : void {
  while ( animalInfoContainer.firstChild ) {
    animalInfoContainer.removeChild( animalInfoContainer.firstChild );
  }
}