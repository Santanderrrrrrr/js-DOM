// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
let counts ={
    gameCount: 0,
    won: 0,
    lost: 0,
    tied: 0
}

let hands = ["Kamień", "Papier", "nożyczki"]

const options = document.querySelectorAll(".select img")
const goButton =  document.querySelector(".start")
const winner = document.querySelector("div>h2>span")
console.log(winner.innerHTML)



let currentlySelected = "";
// let yourChoice = document.querySelector("div span:nth-child(1)")
// let compChoice = document.querySelector("div.panel-left p span:nth-child(2)")
let spans = document.querySelectorAll("div span")
// spans.forEach((span)=>console.log(span.dataset))

// console.log(spans)

const selectionFunction = (e) =>{
    currentlySelected = e.target.title
    spans[0].textContent = currentlySelected

    

}

for (let option of options){
    option.addEventListener("click", selectionFunction)
}

goButton.addEventListener("click", function(e){
    if(currentlySelected.length){   
        const optionTitles = []
        for(let o of options){
            optionTitles.push(o.title)
        }
        spans[1].textContent = optionTitles[Math.floor(Math.random()*optionTitles.length)]
        counts.gameCount ++;
        spans[3].textContent = counts.gameCount

        if(spans[0].textContent== spans[1].textContent){
            counts.tied++;
            spans[6].textContent = counts.tied
            console.log(spans[6])
            winner.textContent = "Remis!"
        }else if(hands.indexOf(spans[0].textContent) == hands.indexOf(spans[1].textContent)-1 || (hands.indexOf(spans[0].textContent) == 2 && hands.indexOf(spans[1].textContent)==0)){
            counts.lost++;
            spans[5].textContent = counts.lost
            winner.textContent = "Przegrany :("
        }else if(hands.indexOf(spans[0].textContent) == hands.indexOf(spans[1].textContent)+1 || (hands.indexOf(spans[0].textContent) == 0 && hands.indexOf(spans[1].textContent)==2)){
            counts.won++;
            spans[4].textContent = counts.won
            winner.textContent = "Wygrany XD"
        }else{
            ""
        }
    }else{
        alert("You gotta throw a hand, fam!")
    }
    
    currentlySelected = ""
    spans[0].textContent = currentlySelected



})


