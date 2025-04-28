const form = document.querySelector("form");
let id =0;

class Pet {
  constructor(_name, _ownerName, _species, _breed = []) {
    this.name = _name;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPetName = document.getElementById("petName").value;
  const inputOwnerName = document.getElementById("ownerName").value;
  const inputSpecies = document.getElementById("species").value;
  const inputBreed = document.getElementById("breed").value;


});

createPet () {


}
