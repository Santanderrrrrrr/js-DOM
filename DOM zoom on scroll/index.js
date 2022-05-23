let title = document.createElement("h1")
title.textContent = "Zooming on Scroll"
title.classList.add("titlie")

document.body.appendChild(title)

let ranDiv = document.createElement("div")
ranDiv.classList.add("box")
ranDiv.classList.add("divie")
document.body.appendChild(ranDiv)

let body = document.querySelector("body")

let size = 10;

let zoom = true;

// window.addEventListener("scroll", function() {
        
//     ranDiv.style.height = `${(window.scrollY)-(window.scrollY/10)}px`
//     ranDiv.style.width = `${(window.scrollY)-(window.scrollY/10)}px`

    
//     }
// )

// window.addEventListener("scroll", function(){
//     if (zoom) {
//         ranDiv.style.height = `${(window.scrollY)*0.5 }px`
//         ranDiv.style.width = `${(window.scrollY)*0.5}px`
        
//     }
//     else{
//         ranDiv.style.height = `${(window.scrollY)/size }px`
//         ranDiv.style.width = `${(window.scrollY)/size}px`
//         size+=10;
//     }
//     if(ranDiv.style.width> this.window.innerWidth){
//         zoom = false
//     }
// })

window.addEventListener("scroll", function(){
    if(size >= window.innerWidth/2){
        zoom = false
    }
    else if (size <= 0){
        zoom = true
    }
    if (zoom==true){
        size+=5
        ranDiv.style.width = size + "px"
        ranDiv.style.height = size + "px"
    }
    else{
        size-=5
        ranDiv.style.width = size + "px"
        ranDiv.style.height = size + "px"
    }
})
