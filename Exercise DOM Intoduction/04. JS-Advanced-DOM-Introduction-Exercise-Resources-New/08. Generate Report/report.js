function generateReport() {
    function generateReport() {
       
        var table = document.getElementById("myTable");
      
        
        var headers = table.getElementsByTagName("th");
      
       
        var selectedColumns = [];
      
     
        for (var i = 0; i < headers.length; i++) {
          var checkbox = headers[i].getElementsByTagName("input")[0];
          if (checkbox.checked) {
            selectedColumns.push(checkbox.name);
          }
        }
      
     
        var reportData = [];
      
     
        var rows = table.getElementsByTagName("tr");
      
   
        for (var j = 1; j < rows.length; j++) {
          var rowData = {};
      
        
          var cells = rows[j].getElementsByTagName("td");
      
         
          for (var k = 0; k < cells.length; k++) {
            var columnName = headers[k].getElementsByTagName("input")[0].name;
            if (selectedColumns.includes(columnName)) {
              rowData[columnName] = cells[k].textContent;
            }
          }
      
      
          reportData.push(rowData);
        }
      
        var reportJson = JSON.stringify(reportData);
      
       
        document.getElementById("output").value = reportJson;
      }
      
}