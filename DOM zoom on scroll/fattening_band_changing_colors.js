let title = document.createElement("h1")
title.textContent = "Fattening Band Changing colors"
title.classList.add("titlie")
document.body.appendChild(title)

band = document.createElement("div")
band.classList.add("divie")
band.style.width = "100vh"
// band.style.height = "20vh"
band.style.backgroundColor = "#222"
document.body.appendChild(band)

let useNumber  = 10;
let limit = false;

window.addEventListener("scroll", ()=>{
        if (useNumber<=0){
            limit = true
        }
        else if (useNumber >= window. innerHeight/4){
            limit = false
        }

        if (limit){
            useNumber += 5;
            band.style.height = useNumber + "px";
            band.style.backgroundColor = "green"
        }
        else if(!limit){
            useNumber-=5;
            band.style.height = useNumber + "px";
            band.style.backgroundColor = "red"
        }

        
    }

)


