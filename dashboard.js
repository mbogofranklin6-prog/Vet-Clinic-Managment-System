let pets = JSON.parse(localStorage.getItem("pets")) || [];
document.getElementById("totalPets").textContent = pets.length;

const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
document.getElementById("totalAppointments").textContent = appointments.length;

const table = document.getElementById("petTable");

function displayPets(list) {
  table.innerHTML = "";

  list.forEach((pet, index) => {
    table.innerHTML += `

<tr>

<td>${pet.ownerName}</td>

<td>${pet.petName}</td>

<td>${pet.species}</td>

<td>${pet.breed}</td>

<td>${pet.age}</td>

<td>

<button onclick="deletePet(${index})">

Delete

</button>

</td>

</tr>

`;
  });
}

displayPets(pets);

function deletePet(index) {
  pets.splice(index, 1);

  localStorage.setItem("pets", JSON.stringify(pets));

  displayPets(pets);
}

document.getElementById("search").addEventListener("keyup", function () {
  const search = this.value.toLowerCase();

  const filtered = pets.filter(
    (p) =>
      p.petName.toLowerCase().includes(search) ||
      p.ownerName.toLowerCase().includes(search),
  );

  displayPets(filtered);
});
// ==============================
// Display Appointments
// ==============================

const appointmentBody = document.getElementById("appointmentBody");

if (appointmentBody) {
  appointmentBody.innerHTML = "";

  appointments.forEach((appointment) => {
    appointmentBody.innerHTML += `
      <tr>
        <td>${appointment.ownerName}</td>
        <td>${appointment.petName}</td>
        <td>${appointment.service}</td>
        <td>${appointment.doctor}</td>
        <td>${appointment.date}</td>
        <td>${appointment.time}</td>
      </tr>
    `;
  });
}
