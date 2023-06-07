function attachEventsListeners() {

    function convertTimeUnits() {
        
        var hoursInput = document.getElementById("hoursInput");
        var minutesInput = document.getElementById("minutesInput");
        var secondsInput = document.getElementById("secondsInput");
      
      
        var hours = parseFloat(hoursInput.value);
        var minutes = parseFloat(minutesInput.value);
        var seconds = parseFloat(secondsInput.value);
      
        
        var days = hours / 24;
        var minutesTotal = hours * 60 + minutes;
        var secondsTotal = hours * 3600 + minutes * 60 + seconds;
      
       
        document.getElementById("daysInput").value = days;
        document.getElementById("minutesTotalInput").value = minutesTotal;
        document.getElementById("secondsTotalInput").value = secondsTotal;
      }
      
     
      var convertButtons = document.querySelectorAll(".convert-button");
      
      
      convertButtons.forEach(function (button) {
        button.addEventListener("click", convertTimeUnits);
      });
      ;
}