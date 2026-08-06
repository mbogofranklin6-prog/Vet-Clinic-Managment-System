const treatmentForm = document.getElementById("treatmentForm");

treatmentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const treatment = {
    petName: document.getElementById("petName").value,
    ownerName: document.getElementById("ownerName").value,
    diagnosis: document.getElementById("diagnosis").value,
    treatment: document.getElementById("treatment").value,
    medication: document.getElementById("medication").value,
    doctor: document.getElementById("doctor").value,
    nextVisit: document.getElementById("nextVisit").value,
  };

  let treatments = JSON.parse(localStorage.getItem("treatments")) || [];

  treatments.push(treatment);

  localStorage.setItem("treatments", JSON.stringify(treatments));

  alert("Treatment record saved successfully!");

  treatmentForm.reset();
});
