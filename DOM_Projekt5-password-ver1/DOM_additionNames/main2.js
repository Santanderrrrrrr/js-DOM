const btn = document.querySelector("button")

const nameDiv = document.querySelector("div")

const names = [];

const addName = (e)=>{
    e.preventDefault()
    const inputSpace = document.querySelector("input")
    
    if(inputSpace.value.length){    
        for(let name of names){
            if(inputSpace.value === name){
                console.alert(inputSpace.value + " is an existent name")
                return
            } 
        }
        names.push(inputSpace.value)
        console.log(inputSpace.value)  
    }
    
    nameDiv.textContent += inputSpace.value + ","
    inputSpace.value = " "
}

btn.addEventListener("click", addName)

// const btn = document.querySelector("button")

// btn.addEventListener("click", function(e){
//     const inputSpace = document.querySelector("input")
//     const nameDiv = document.querySelector("div")
//     input

// })