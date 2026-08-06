const pets = JSON.parse(localStorage.getItem("pets")) || [];

if (pets.length > 0) {
  const pet = pets[pets.length - 1];

  document.getElementById("owner").textContent = pet.ownerName;

  document.getElementById("pet").textContent = pet.petName;

  document.getElementById("species").textContent = pet.species;

  document.getElementById("breed").textContent = pet.breed;

  document.getElementById("age").textContent = pet.age;
}
