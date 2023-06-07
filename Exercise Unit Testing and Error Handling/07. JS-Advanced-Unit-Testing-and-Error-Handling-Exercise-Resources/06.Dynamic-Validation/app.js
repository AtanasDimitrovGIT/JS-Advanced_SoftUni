function validate() {
    function validateEmail(inputField) {
        var email = inputField.value.toLowerCase();
        var emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
      
        if (!emailPattern.test(email)) {
          inputField.classList.add("error");
        } else {
          inputField.classList.remove("error");
        }
      }
      
}