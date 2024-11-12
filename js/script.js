const addBtn = document.getElementById("addBtn");
const inputField = document.getElementById("inputField");
const tbody = document.getElementById("tbody");
let serial = 1;
addBtn.addEventListener('click', () => {
    let inputFieldValue = inputField.value;
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${serial}</td>
                            <td>${inputFieldValue}</td>
                            <td><input type="button" /*onclick="deleteTableRow(${serial})"*/ id="del-${serial}" class="delete-row" value="-"></td>`;

    // tr = '';
    // tr += 'hi';
    tbody.appendChild(tr);
    // tbody.append(tr);
    serial++;
    inputField.value = '';


    // Add event listener to delete later as discussed in previous class (method 2)
    // const deleteButtons = document.querySelectorAll('.delete-row');
    // deleteButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         button.parentNode.parentNode.remove();
    //     });
    // });
})

// method 1
function deleteTableRow(idNumber = 1) {
    document.getElementById("del-"+idNumber).closest("tr").remove();
}

// delete row (method 3)
const deleteRow = document.getElementsByClassName('delete-row');
tbody.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target.classList[0] === "delete-row") {
        event.target.closest("tr").remove();
    }
})