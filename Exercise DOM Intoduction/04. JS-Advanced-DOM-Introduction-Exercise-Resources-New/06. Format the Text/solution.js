function solve() {
  function formatText() {
   
    var inputText = document.getElementById("input").value;
  
   
    var sentences = inputText.split(".");
  
  
    sentences = sentences.filter(function (sentence) {
      return sentence.trim().length > 0;
    });
  
   
    document.getElementById("input").value = "";
  
   
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
  
    
    var paragraph = "";
    var sentenceCount = 0;
  
    for (var i = 0; i < sentences.length; i++) {
      
      paragraph += sentences[i].trim() + ".";
  
      
      sentenceCount++;
  
      
      if (sentenceCount === 3 || i === sentences.length - 1) {
       
        var paragraphElement = document.createElement("p");
        paragraphElement.textContent = paragraph;
  
       
        outputDiv.appendChild(paragraphElement);
  
        
        paragraph = "";
        sentenceCount = 0;
      }
    }
  }
  
}