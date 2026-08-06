// Get the vaccination form
const vaccinationForm = document.getElementById("vaccinationForm");

// Listen for form submission
vaccinationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Create vaccination object
  const vaccination = {
    petName: document.getElementById("petName").value,
    ownerName: document.getElementById("ownerName").value,
    vaccine: document.getElementById("vaccine").value,
    doctor: document.getElementById("doctor").value,
    vaccinationDate: document.getElementById("vaccinationDate").value,
    nextDue: document.getElementById("nextDue").value,
    notes: document.getElementById("notes").value,
  };

  // Get existing vaccination records
  let vaccinations = JSON.parse(localStorage.getItem("vaccinations")) || [];

  // Add new vaccination
  vaccinations.push(vaccination);

  // Save back to localStorage
  localStorage.setItem("vaccinations", JSON.stringify(vaccinations));

  // Success message
  alert("Vaccination record saved successfully!");

  // Reset the form
  vaccinationForm.reset();
});
