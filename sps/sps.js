const stone = document.getElementById("stone")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

const userSelect = document.querySelectorAll(".select");
const selected = document.getElementById("selected");
const compSelected = document.getElementById("comp-selected");
const result = document.getElementById("result");
const outer = document.getElementById("outer");
const button = document.getElementById("button");

userSelect.forEach((selection) => selection.addEventListener("click", function () {
    console.log("this is selected:", selection.textContent)
    selected.classList.add("selected");
    compSelected.classList.add("comp-selected");
    selected.textContent = selection.textContent
    document.getElementById("intro").textContent = "";

    setTimeout(() => {
    const comp = compSelect()
    displayresult(selection,comp )
    }, 1000);
}
))

function compSelect() {
    const options = [stone, paper, scissor];
    const compChoice = options[Math.floor(Math.random() * (2 - 0 + 1) + 0)];

    compSelected.textContent = compChoice.textContent
    return compChoice;
}

function displayresult(userChoice, compChoice) {
    result.classList.add("display-result");
    if (userChoice.innerHTML === compChoice.innerHTML) {
        result.textContent = "That's a draw!"
    }
    else if (compChoice === stone) {
        if (userChoice.textContent === "✌️") {
            result.textContent = "You lose !"
        }
        else if (userChoice.textContent === "🤚") {
            result.textContent = "You won !"
        }
    }
    else if (compChoice === paper) {
        if (userChoice.textContent === "✌️") {
            result.textContent = "You won !"
        }
        else if (userChoice.textContent === "✊") {
            result.textContent = "You lose !"
        }
    }
    else if (compChoice === scissor) {
        if (userChoice.textContent === "✊") {
            result.textContent = "You won !"
        }
        else if (userChoice.textContent === "🤚") {
            result.textContent = "You lose !"
        }
    }
    changeBackground();
}

function changeBackground() {
    if(result.textContent === "You lose !"){
        selected.style.backgroundColor = "rgba(247, 52, 52, 0.96)"
        compSelected.style.backgroundColor= "rgba(8, 248, 8, 0.95)"
        outer.setAttribute("class","result-outer-lose")
    }
    else if(result.textContent === "You won !"){
        selected.style.backgroundColor = "rgba(8, 248, 8, 0.96)"
        compSelected.style.backgroundColor= "rgba(247, 52, 52, 0.88)"
        outer.setAttribute("class","result-outer-won")
    }
    else{
        selected.style.backgroundColor = "rgba(110, 121, 110, 0.79)"
        compSelected.style.backgroundColor= "rgba(104, 113, 111, 0.73)";
        outer.setAttribute("class","result-outer-draw")

    }
}

function initial(){
    document.getElementById("intro").textContent = "Select an option and start the game!";
    selected.textContent = null
    compSelected.textContent = null
    selected.classList.remove("selected")
    compSelected.classList.remove("comp-selected")
    result.classList.remove("display-result")
    result.textContent = null
}






