function create(words) {
   function createDivs(strings) {
     
      var contentElement = document.getElementById("content");
    
     
      strings.forEach(function (string) {
      
        var div = document.createElement("div");
    
      
        var paragraph = document.createElement("p");
        paragraph.textContent = string;
        paragraph.style.display = "none"; 
    
     
        div.addEventListener("click", function () {
          paragraph.style.display = "block"; 
        });
    
    
        div.appendChild(paragraph);
    
       
        contentElement.appendChild(div);
      });
    }
    ;
}