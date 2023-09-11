let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".op");
let output = document.querySelector(".output");
let prev = document.querySelector(".prev");
let result = document.querySelector(".res");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let decimals = document.querySelector(".decimals");
let prevVal = "";
let currVal = "";
let op = "";

numbers.forEach(num => {
    num.addEventListener("click", e =>{
     handleNum(e.target.textContent);
     result.textContent = currVal; 
    })
})

function handleNum(number){
    currVal += number
}
operators.forEach(ops =>{
    ops.addEventListener("click", e =>{
        handleOp(e.target.textContent)
        prev.textContent = `${prevVal} ${op}`;
        result.textContent = currVal; 
    })
})
function handleOp(operator){
    op = operator;
    prevVal = currVal;
    currVal = ""
}

clear.addEventListener("click", () =>{
    prev.textContent = "";
    result.textContent = "";
    prevVal = "";
    currVal = "";
    op = "";
})
equal.addEventListener("click", () =>{
    if(prevVal !== "" && currVal !== ""){
        handleCalculation();
}
})
function handleCalculation(){
    prevVal = Number(prevVal);
    currVal = Number(currVal);
    if(op == "+"){
        prevVal += currVal;
    }
    else if(op == "-"){
        prevVal -= currVal;
    }else if(op == "*"){
        prevVal *= currVal;
    }else if(op == "/"){
        prevVal /= currVal;
    }
    prev.textContent = String(prevVal);
    result.textContent = ""
}