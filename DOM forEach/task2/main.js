let size = 10;
let orderElement = 1;

const init = () => {
 // tutaj kod
    let btn = document.createElement("button")
    btn.textContent = "Add 10 list items to the body"
    document.body.appendChild(btn)

    const ulgowy = document.createElement("ul")
    ulgowy.style.listStyle="none"
    document.body.appendChild(ulgowy)

    btn.addEventListener("click", createLiElements)




}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        let lil = document.createElement("li");
        lil.textContent = `list item ${orderElement}`
        lil.style.fontSize = `${size+orderElement}px`
        
        orderElement++        
        document.querySelector("ul").appendChild(lil)
    }
 
}

init()