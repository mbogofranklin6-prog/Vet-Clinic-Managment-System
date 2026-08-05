// ================================
// PawCare Veterinary Clinic
// Appointment Booking Script
// ================================

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const owner = document.getElementById("owner").value.trim();
  const pet = document.getElementById("pet").value.trim();
  const species = document.getElementById("species").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const doctor = document.getElementById("doctor").value;
  const phone = document.getElementById("phone").value.trim();
  const notes = document.getElementById("notes").value.trim();

  // Check required fields
  if (
    owner === "" ||
    pet === "" ||
    date === "" ||
    time === "" ||
    phone === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Prevent booking in the past
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(date);

  if (selectedDate < today) {
    alert("You cannot book an appointment in the past.");
    return;
  }

  // Create appointment object
  const appointment = {
    id: Date.now(),
    owner,
    pet,
    species,
    service,
    date,
    time,
    doctor,
    phone,
    notes,
    status: "Scheduled",
  };

  // Get existing appointments
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  // Save appointment
  appointments.push(appointment);

  localStorage.setItem("appointments", JSON.stringify(appointments));

  alert("Appointment booked successfully!");

  appointmentForm.reset();

  // Redirect to dashboard
  window.location.href = "dashboard.html";
});
