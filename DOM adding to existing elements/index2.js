const butt = document.querySelector("button");

let number = 1
let activeNumber=1

const addition = function () {
    const div = document.createElement('div');
    
    div.textContent = number;
    
    if(activeNumber % 5 ==0 && activeNumber!= 1){
        div.classList.add("circle");
        activeNumber= 0;
    }

    document.body.appendChild(div);
    number++;
    activeNumber++;

}

butt.addEventListener("click", addition)