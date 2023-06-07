function solve() {

    function convertNumber() {
       
        var decimalNumber = parseInt(document.getElementById("decimalInput").value);
      
    
        var toSelect = document.getElementById("toSelect");
      
     
        var selectedOption = toSelect.options[toSelect.selectedIndex].value;
      
     
        var convertedNumber;
        if (selectedOption === "binary") {
          convertedNumber = decimalNumber.toString(2);
        } else if (selectedOption === "hexadecimal") {
          convertedNumber = decimalNumber.toString(16).toUpperCase();
        }
      
      
        document.getElementById("resultInput").value = convertedNumber;
      }
      
}