let pets = JSON.parse(localStorage.getItem("pets")) || [];

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
