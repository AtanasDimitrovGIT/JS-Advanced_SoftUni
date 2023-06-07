function lockedProfile() {
    
var showMoreButtons = document.querySelectorAll(".show-more");


showMoreButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
 
    var isLocked = event.target.dataset.locked === "true";

    
    var isDisplayed = event.target.parentElement.querySelector(".hidden-info").style.display === "block";

   
    if (isLocked || isDisplayed) {
      return;
    }

   
    event.target.parentElement.querySelector(".hidden-info").style.display = "block";
  });
});


var hideButtons = document.querySelectorAll(".hide-button");


hideButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    
    var isLocked = event.target.dataset.locked === "true";

    
    if (isLocked) {
      return;
    }

    
    event.target.parentElement.querySelector(".hidden-info").style.display = "none";
  });
})
}
