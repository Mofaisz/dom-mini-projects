let input = document.querySelector("#number");
let addition = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let reset = document.querySelector("#reset");
let display = document.querySelector("#result")

if(input.value){
    display.textContent = input.value;
}else{
    display.textContent = 0;
 

}

addition.addEventListener("click",add);

function add(){
    let value = Number(display.textContent);
    let currentNumber = Number(input.value);

    let result = value+currentNumber;
    display.textContent=result;

}

subtract.addEventListener("click",sub)

function sub(){
    let value  = Number(display.textContent);
    let currentNumber = Number(input.value);
    let result  = value-currentNumber;
    display.textContent = result;
}

reset.addEventListener("click",resetButton);

function resetButton(){
    display.textContent = 0;
    input.value = ""
}
