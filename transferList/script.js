let firstColumn = document.querySelector("#first-column");
let allItemLeft = document.querySelector("#all-item-left");
let oneItemLeft = document.querySelector("#one-item-left");
let oneItemRight = document.querySelector("#one-item-right");
let allItemRight = document.querySelector("#all-item-right");
let secondColumn = document.querySelector("#side")
let checkboxes = document.querySelectorAll(".checkboxes");

allItemLeft.addEventListener("click", allLeft);

oneItemLeft.disabled = true;
oneItemRight.disabled=true;

function allLeft(){
    while (secondColumn.firstChild) {
        firstColumn.appendChild(secondColumn.firstElementChild)
    }
}

allItemRight.addEventListener("click", allRight);

function allRight(){
    while (firstColumn.firstChild) {
        secondColumn.appendChild(firstColumn.firstElementChild)
    }
    
}

oneItemLeft.addEventListener("click", oneLeft);

function oneLeft(){
    let children = secondColumn.children;
    // console.log(children);
    for (let index = children.length-1; index >= 0; index--) {
        // console.log(children[index]);
        let child = children[index];
        // console.log(child);
        let selectedChild = child.querySelector('input');
        // console.log(selectedChild);
        if (selectedChild.checked) {
            firstColumn.appendChild(child);
            // console.log(child);
            selectedChild.checked = !selectedChild.checked;
        }        
    }
    oneItemLeft.disabled=true;
}






oneItemRight.addEventListener("click", oneRight);

function oneRight(){
    let children = firstColumn.children;
    for (let index = children.length-1; index >= 0; index--) {
        let child = children[index];
        let selectedChild = child.querySelector('input')
        if (selectedChild.checked) {
            secondColumn.appendChild(child);
            selectedChild.checked = !selectedChild.checked
        }
        
    }
    oneItemRight.disabled=true;
}



window.onload =function ()  {
    let checkboxes = document.querySelectorAll('input[type = "checkbox"]');
    checkboxes.forEach((val) =>{
        val.checked = false;
    })
}

checkboxes.forEach((checkbox) =>
checkbox.addEventListener("change",(event) =>{
    console.log(event.target.parentElement.parentElement)
    if(event.target.checked){
        if(event.target.parentElement.parentElement === secondColumn){
            oneItemLeft.disabled = false;
        }
        if(event.target.parentElement.parentElement === firstColumn){
            oneItemRight.disabled = false;
        }
    }else{
        oneItemLeft.disabled = true;
        oneItemRight.disabled = true;
    }
   
}))