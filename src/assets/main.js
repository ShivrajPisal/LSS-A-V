function searchVal() {
  var dropdownValue = document.getElementById("dropdown").value;
  var textbox1Value = document.getElementById("textbox1").value;
  var textbox2Value = document.getElementById("textbox2").value;
  var tableRows = "";

  if (dropdownValue === "signaccwiht") {
    tableRows += "<tr><td>" + dropdownValue + " " + textbox1Value + "</td><td>" + textbox2Value + "</td></tr>";
  } else if (dropdownValue === "listacc") {
    tableRows += "<tr><td>" + dropdownValue + " " + textbox1Value + " 1</td><td>" + textbox2Value + " 1</td></tr>";
    tableRows += "<tr><td>" + dropdownValue + " " + textbox1Value + " 2</td><td>" + textbox2Value + " 2</td></tr>";
    tableRows += "<tr><td>" + dropdownValue + " " + textbox1Value + " 3</td><td>" + textbox2Value + " 3</td></tr>";
  }

  var table = "<table><thead><tr><th>Column 1</th><th>Column 2</th></tr></thead><tbody>" + tableRows + "</tbody></table>";
  document.getElementById("table-container").innerHTML = table;
}
