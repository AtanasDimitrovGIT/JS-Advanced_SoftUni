function subtract() {
    
    let num1input = document.getElementById("firstNumber");
    let num2input = document.getElementById("secondNumber");

    let num1 = Number(num1input.value);
    let num2 = Number(num2input.value);

    let sum = num1 - num2;

    document.getElementById("result").textContent = sum;

    
}