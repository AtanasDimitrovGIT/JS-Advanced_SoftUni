function attachEventsListeners() {
    function convertDistance() {
        var inputField = document.getElementById("inputValue");
        var inputUnit = document.getElementById("inputUnit");
        var outputUnit = document.getElementById("outputUnit");
        var outputField = document.getElementById("outputValue");
      
        var inputValue = parseFloat(inputField.value);
        var inputUnitValue = inputUnit.value;
        var outputUnitValue = outputUnit.value;
      
        // Perform the conversion based on the selected units
        var convertedValue;
      
        if (inputUnitValue === "meters" && outputUnitValue === "kilometers") {
          convertedValue = inputValue / 1000;
        } else if (inputUnitValue === "meters" && outputUnitValue === "miles") {
          convertedValue = inputValue * 0.000621371;
        } else if (inputUnitValue === "kilometers" && outputUnitValue === "meters") {
          convertedValue = inputValue * 1000;
        } else if (inputUnitValue === "kilometers" && outputUnitValue === "miles") {
          convertedValue = inputValue * 0.621371;
        } else if (inputUnitValue === "miles" && outputUnitValue === "meters") {
          convertedValue = inputValue / 0.000621371;
        } else if (inputUnitValue === "miles" && outputUnitValue === "kilometers") {
          convertedValue = inputValue / 0.621371;
        }
      
        // Display the converted value in the output field
        outputField.value = convertedValue.toFixed(2);
      }
      
      var convertButton = document.getElementById("convertButton");
      convertButton.addEventListener("click", convertDistance);
      ;
}