function addItem() {
    function addItemToMenu() {
        var newItemText = document.getElementById("newItemText").value;
        var newItemValue = document.getElementById("newItemValue").value;
      
        var option = document.createElement("option");
        option.textContent = newItemText;
        option.value = newItemValue;
      
        var menu = document.getElementById("menu");
        menu.appendChild(option);
      
        document.getElementById("newItemText").value = "";
        document.getElementById("newItemValue").value = "";
      }
      ;
}