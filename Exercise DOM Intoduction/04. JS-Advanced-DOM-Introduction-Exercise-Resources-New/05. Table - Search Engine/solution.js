function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      function searchTable() {
         var searchText = document.getElementById("searchInput").value.toLowerCase();
       
         document.getElementById("searchInput").value = "";
       
         var selectedRows = document.getElementsByClassName("select");
         while (selectedRows.length > 0) {
           selectedRows[0].classList.remove("select");
         }
       
         var table = document.getElementById("myTable");
         var rows = table.getElementsByTagName("tr");
       
         for (var i = 1; i < rows.length; i++) {
           var cells = rows[i].getElementsByTagName("td");
           var rowContainsMatch = false;
       
          
           for (var j = 0; j < cells.length; j++) {
             var cellText = cells[j].textContent.toLowerCase();
             if (cellText.includes(searchText)) {
               rowContainsMatch = true;
               break;
             }
           }
       
          
           if (rowContainsMatch) {
             rows[i].classList.add("select");
           }
         }
       }
       
   }
}