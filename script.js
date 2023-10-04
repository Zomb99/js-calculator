const output = document.querySelector("#test");
const buttons = document.querySelectorAll('.num');
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals")
const operators = document.querySelectorAll(".operator  ")
let equation = ""
let operator = "none"
for(let button of buttons){
    button.addEventListener("click", addOutput);
}

for(let b of operators){
    b.addEventListener("click", checkOperation)
}

clearButton.addEventListener("click", clear);
equalsButton.addEventListener("click", equals)


function addOutput(event){
        equation += event.currentTarget.innerText;
        output.innerHTML = equation;
}

function clear(){
    equation = "";
    output.innerHTML = "";
    operator = "none"
}

function checkOperation(event){
    if(operator == "none"){
        operator = event.currentTarget.innerText;
        equation += operator
        output.innerHTML = equation;
    }
}

function equals(){
    let numArr;
    let result = 0;
    switch(operator){
        case "+":
            numArr = equation.split("+")
            result = Number(numArr[0]) + Number(numArr[1])
            break;
        case "-":
            numArr = equation.split("-")
            result = Number(numArr[0]) - Number(numArr[1])
            break;
        case "*":
            numArr = equation.split("*")
            result = Number(numArr[0]) * Number(numArr[1])
            break;
        case "/":
            numArr = equation.split("/")
            result = Number(numArr[0]) / Number(numArr[1])
            break;
    }
    equation = result;
    output.innerHTML = equation
    operator = "none"
    
}