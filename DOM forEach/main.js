// tutaj rozwiązanie
const lis = document.querySelectorAll("ul>li")
console.log(lis + "this is them")

const btn = document.querySelector("button")
console.log(btn.textContent)

let size = 12

btn.addEventListener("click", () =>{
    for(let l of lis){
        l.style.display = "block"
        l.style.fontSize = `${size}px`
    }
    size++
})

// btn.addEventListener("click", function(){
//     lis.forEach((l)=>{
//         l.style.display = "block"
//         l.style.fontSize = `${size}px`
        
//     })
//     size++;
// })