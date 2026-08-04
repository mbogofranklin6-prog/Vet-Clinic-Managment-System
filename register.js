// ================================
// PawCare Veterinary Clinic
// Pet Registration Script
// ================================

const petForm = document.getElementById("petForm");

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const ownerName = document.getElementById("ownerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const petName = document.getElementById("petName").value.trim();
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value.trim();
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const colour = document.getElementById("colour").value.trim();
  const medicalHistory = document.getElementById("medicalHistory").value.trim();

  // Validate required fields
  if (ownerName === "" || phone === "" || petName === "" || species === "") {
    alert("Please fill in all required fields.");
    return;
  }

  // Create pet object
  const pet = {
    id: Date.now(),
    ownerName,
    phone,
    email,
    petName,
    species,
    breed,
    gender,
    age,
    weight,
    colour,
    medicalHistory,
    dateRegistered: new Date().toLocaleDateString(),
  };

  // Retrieve existing pets
  let pets = JSON.parse(localStorage.getItem("pets")) || [];

  // Check for duplicate registration
  const duplicate = pets.find(
    (existingPet) =>
      existingPet.petName.toLowerCase() === petName.toLowerCase() &&
      existingPet.ownerName.toLowerCase() === ownerName.toLowerCase(),
  );

  if (duplicate) {
    alert("This pet has already been registered.");
    return;
  }

  // Save new pet
  pets.push(pet);

  localStorage.setItem("pets", JSON.stringify(pets));

  // Success message
  alert("Pet registered successfully!");

  // Reset form
  petForm.reset();
});
