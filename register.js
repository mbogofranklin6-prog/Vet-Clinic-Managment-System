// Select the registration form
const petForm = document.getElementById("petForm");

// Listen for form submission
petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect form data
  const pet = {
    ownerName: document.getElementById("ownerName").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    petName: document.getElementById("petName").value,
    species: document.getElementById("species").value,
    breed: document.getElementById("breed").value,
    gender: document.getElementById("gender").value,
    age: document.getElementById("age").value,
    weight: document.getElementById("weight").value,
    colour: document.getElementById("colour").value,
    history: document.getElementById("history").value,
    emergency: document.getElementById("emergency").value,
  };

  // Get existing pets or create an empty array
  let pets = JSON.parse(localStorage.getItem("pets")) || [];

  // Add the new pet
  pets.push(pet);

  // Save back to localStorage
  localStorage.setItem("pets", JSON.stringify(pets));

  // Success message
  alert("✅ Pet registered successfully!");

  // Clear the form
  petForm.reset();
});
