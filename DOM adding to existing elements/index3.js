const buttt = document.querySelector("button")
let UL = document.createElement("ul")

document.body.appendChild( UL )

let numb = 1;
let numbActive = 1;

const additionFunc = function(){
    
    aLi = document.createElement("li")
    aLi.textContent= numbActive;

    if(numbActive %3 == 0 && numbActive != 1){
        aLi.classList.add("largerLi")
    }
    numbActive+=2;

    UL.appendChild(aLi)


}

buttt.addEventListener("click", additionFunc)