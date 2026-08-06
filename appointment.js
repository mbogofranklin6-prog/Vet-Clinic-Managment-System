// Get the appointment form
const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const appointment = {
    petName: document.getElementById("petName").value,
    ownerName: document.getElementById("ownerName").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    doctor: document.getElementById("doctor").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    notes: document.getElementById("notes").value,
  };

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  appointments.push(appointment);

  localStorage.setItem("appointments", JSON.stringify(appointments));

  alert("Appointment booked successfully!");

  appointmentForm.reset();
});
