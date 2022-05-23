const btn = document.querySelector("button")
const listOfNames = []
const nameDiv = document.querySelector("div")
const inputSpace = document.querySelector("input")

const addName = (e)=>{
    e.preventDefault()
    if(inputSpace.value.length){
        if(listOfNames.indexOf(inputSpace.value)>=0){
            alert("Yoooooo, slow down. This guy's here already!")
        }else{
            listOfNames.push(inputSpace.value)
            listOfNames.forEach((name)=>{
                if (nameDiv.textContent.indexOf(name)<0) {
                    nameDiv.textContent += `${name}, `
                }
            })
        }
    }
    inputSpace.value = ""
}



btn.addEventListener("click", addName)