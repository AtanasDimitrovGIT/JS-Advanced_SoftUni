function toggle() {

    const MORE = "More";
    const LESS = "Less"

    let button = document.querySelector(".button");
    let text = document.querySelector("#extra")

    if (button.textContent === MORE){
       button.textContent = LESS 
    }
    else if (button.textContent === LESS){
        button.textContent = MORE
    }

    if (text.style.display === "none" || text.style.display ===  ""){
        text.style.display = "block"
    }
    else if (text.style.display === "block"){
        text.style.display = "none"
    }

}