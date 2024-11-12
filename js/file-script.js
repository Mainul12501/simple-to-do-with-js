const addBtn = document.getElementById("addBtn");
const inputField = document.getElementById("inputField");
const tbody = document.getElementById("tbody");
let serial = 1;
const dataArray = [];

addBtn.addEventListener('click', () => {
    let inputFieldValue = inputField.value;
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${serial}</td>
                            <td>${inputFieldValue}</td>
                            <td><input type="button" /*onclick="deleteTableRow(${serial})"*/ id="del-${serial}" class="delete-row" value="-"></td>`;

    tbody.appendChild(tr);
    // tbody.append(tr);

    // save data to array
    dataArray.push({serial: serial, name: inputFieldValue});
    let textData = ""; // Header for CSV-like structure
    dataArray.forEach(item => {
        // textData += `${item.serial}, ${item.name}\n`; // Each row as CSV
        textData += `{${item.serial}, ${item.name}},`; // Each row as CSV
    });
    const blob = new Blob([`[${textData}]`], {type: "text/plain;charset=utf-8"});
    console.log(URL.createObjectURL(blob));
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "data.txt"; // The file name
    link.click();


    serial++;
    inputField.value = '';

})