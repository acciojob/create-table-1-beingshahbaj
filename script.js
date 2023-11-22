// script.js

function insert_Row() {
  
    var table = document.getElementById("sampleTable");

    
    var newRow = table.insertRow(0);

  
    var leftCell = newRow.insertCell(0);
    
    leftCell.innerHTML = "New Cell1";

   
    var rightCell = newRow.insertCell(1);
    
    rightCell.innerHTML = "New Cell2";
}
