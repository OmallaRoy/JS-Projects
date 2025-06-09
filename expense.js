function repeat() {
  let dess = document.querySelector("#description").value;
  let catt = document.querySelector("#categ").value;
  let amtt = document.querySelector("#amts").value;

  if (!dess || !catt || !amtt) {
    alert("Please fill in all fields.");
    return;
  }

  let tableBody = document.querySelector(".tab tbody");
  let addrow = tableBody.insertRow();

  let cell1 = addrow.insertCell(0); // Description
  let cell2 = addrow.insertCell(1); // Category
  let cell3 = addrow.insertCell(2); // Amount
  let cell4 = addrow.insertCell(3); // Delete Button

  cell1.textContent = dess;
  cell2.textContent = catt;
  cell3.textContent = `$${amtt}`;
  cell4.innerHTML = `<button class="btn btn-danger btn-sm" onclick="this.closest('tr').remove()">Delete</button>`;

  // Clear form
  
}
