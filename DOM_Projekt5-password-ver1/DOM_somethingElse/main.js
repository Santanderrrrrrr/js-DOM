const addBtn = document.querySelector(".add")
const resetBtn = document.querySelector(".clean")
const inputSpace = document.querySelector("input")
const showOptions = document.querySelector(".showOptions")
const showAdvice = document.querySelector(".showAdvice")

const options = []


const addOption = function(e) {
    e.preventDefault()
    
    if(inputSpace.value.length){
        options.push(inputSpace.value)
    }
    alert(` You added ${inputSpace.value} to the fray!`)
    inputSpace.value = ""
    console.log(options)
}

const toShowOptions = function(e){
    alert(`Your options are: ${options.join("---")}`)
}

const giveAdvice = (e) => {
    const adviceTitle = document.querySelector("h1")
    randomValue = Math.floor(Math.random()*options.length)
    // console.log(randomValue)
    adviceTitle.textContent = options[randomValue]
}



showAdvice.addEventListener("click", giveAdvice)

showOptions.addEventListener('click', toShowOptions)

addBtn.addEventListener('click', addOption)	

resetBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    options.splice(0, options.length)
    // console.log(options)
})