function solve() {

  function generateTable() {
    var furniture = [
      { name: "Chair", price: 50, decorationFactor: 0.8 },
      { name: "Table", price: 100, decorationFactor: 0.7 },
      { name: "Bed", price: 200, decorationFactor: 0.9 },
      // Add more furniture objects as needed
    ];
  
    var tableBody = document.getElementById("furnitureTableBody");
  
    // Clear the table body before generating new rows
    tableBody.innerHTML = "";
  
    furniture.forEach(function (item) {
      var row = document.createElement("tr");
  
      // Create and append image cell
      var imageCell = document.createElement("td");
      var image = document.createElement("img");
      image.src = "path/to/image"; // Set the image source based on the item
      imageCell.appendChild(image);
      row.appendChild(imageCell);
  
      // Create and append name cell
      var nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);
  
      // Create and append price cell
      var priceCell = document.createElement("td");
      priceCell.textContent = item.price;
      row.appendChild(priceCell);
  
      // Create and append decoration factor cell
      var decorationCell = document.createElement("td");
      decorationCell.textContent = item.decorationFactor;
      row.appendChild(decorationCell);
  
      // Create and append checkbox cell
      var checkboxCell = document.createElement("td");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkboxCell.appendChild(checkbox);
      row.appendChild(checkboxCell);
  
      tableBody.appendChild(row);
    });
  }
  
  function buyFurniture() {
    var checkboxes = document.querySelectorAll("#furnitureTableBody input[type='checkbox']:checked");
    var resultTextbox = document.getElementById("result");
  
    var furnitureNames = [];
    var totalPrice = 0;
    var totalDecorationFactor = 0;
  
    checkboxes.forEach(function (checkbox) {
      var row = checkbox.parentElement.parentElement;
      var name = row.querySelector("td:nth-child(2)").textContent;
      var price = parseFloat(row.querySelector("td:nth-child(3)").textContent);
      var decorationFactor = parseFloat(row.querySelector("td:nth-child(4)").textContent);
  
      furnitureNames.push(name);
      totalPrice += price;
      totalDecorationFactor += decorationFactor;
    });
  
    resultTextbox.value = "Bought furniture: " + furnitureNames.join(", ");
    resultTextbox.value += "\nTotal price: " + totalPrice.toFixed(2);
    resultTextbox.value += "\nAverage decoration factor: " + (totalDecorationFactor / furnitureNames.length).toFixed(2);
  }
  
}