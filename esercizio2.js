const form = document.querySelector("form");
const ol = document.querySelector("ol");
const pets = [];

class Pet {
  constructor(_name, _ownerName, _species, _breed = []) {
    this.name = _name;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  ownerComparison(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPetName = document.getElementById("petName").value;
  const inputOwnerName = document.getElementById("ownerName").value;
  const inputSpecies = document.getElementById("species").value;
  const inputBreed = document.getElementById("breed").value;
  createPet(inputPetName, inputOwnerName, inputSpecies, inputBreed);
  form.reset();
});

function createPet(pet, owner, species, breed) {
  const newPet = new Pet(pet, owner, species, breed);
  console.log(newPet);
  pets.push(newPet);
  console.log(pets);
  if (pets.length > 1) {
    console.log(pets[0].ownerComparison(pets[1]));
  }
  addPet(newPet);
}

function addPet(pet) {
  const li = document.createElement("li");
  li.textContent = pet.name;
  ol.appendChild(li);
}
