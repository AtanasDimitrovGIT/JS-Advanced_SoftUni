function validate() {
    document.addEventListener("DOMContentLoaded", function () {
        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");
        var confirmPasswordInput = document.getElementById("confirm-password");
        var emailInput = document.getElementById("email");
        var isCompanyCheckbox = document.getElementById("company");
        var companyNumberInput = document.getElementById("company-number");
        var submitButton = document.getElementById("submit");
        var validDiv = document.getElementById("valid");
      
        submitButton.addEventListener("click", function (event) {
          event.preventDefault();
          validateForm();
        });
      
        function validateForm() {
          resetValidation();
      
          var isFormValid = true;
      
          if (!validateUsername()) {
            isFormValid = false;
          }
      
          if (!validatePassword()) {
            isFormValid = false;
          }
      
          if (!validateConfirmPassword()) {
            isFormValid = false;
          }
      
          if (!validateEmail()) {
            isFormValid = false;
          }
      
          if (isCompanyCheckbox.checked) {
            if (!validateCompanyNumber()) {
              isFormValid = false;
            }
          }
      
          if (isFormValid) {
            validDiv.style.display = "block";
          } else {
            validDiv.style.display = "none";
          }
        }
      
        function resetValidation() {
          var inputs = document.getElementsByTagName("input");
      
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.border = "none";
          }
        }
      
        function validateUsername() {
          var username = usernameInput.value;
          var usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
      
          if (!usernamePattern.test(username)) {
            usernameInput.style.borderColor = "red";
            return false;
          }
      
          return true;
        }
      
        function validatePassword() {
          var password = passwordInput.value;
          var passwordPattern = /^\w{5,15}$/;
      
          if (!passwordPattern.test(password)) {
            passwordInput.style.borderColor = "red";
            return false;
          }
      
          return true;
        }
      
        function validateConfirmPassword() {
          var password = passwordInput.value;
          var confirmPassword = confirmPasswordInput.value;
      
          if (password !== confirmPassword) {
            confirmPasswordInput.style.borderColor = "red";
            return false;
          }
      
          return true;
        }
      
        function validateEmail() {
          var email = emailInput.value;
          var emailPattern = /^.+@.+\..+$/;
      
          if (!emailPattern.test(email)) {
            emailInput.style.borderColor = "red";
            return false;
          }
      
          return true;
        }
      
        function validateCompanyNumber() {
          var companyNumber = companyNumberInput.value;
      
          if (isNaN(companyNumber) || companyNumber < 1000 || companyNumber > 9999) {
            companyNumberInput.style.borderColor = "red";
            return false;
          }
      
          return true;
        }
      
        isCompanyCheckbox.addEventListener("change", function () {
          var companyFieldset = document.getElementById("company-info");
      
          if (isCompanyCheckbox.checked) {
            companyFieldset.style.display = "block";
          } else {
            companyFieldset.style.display = "none";
          }
        });
      });
      
}
