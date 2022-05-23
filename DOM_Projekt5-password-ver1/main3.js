const passInput = document.getElementById("pass")
const messageDiv =document.getElementsByClassName("message")

const messages = ["Hello and Welcome", "This is a safe space"]
const passwords = ["IronMan", "Cyborg"]

passInput.addEventListener("input", function(e){
    index = passwords.indexOf(this.value)
    // console.log(index)
    if(index>=0){
        // if(messageDiv[0].length>0){
        //     messageDiv[0].removeChild(messageDiv[0].firstChild)
        // }
        let theMessage = document.createElement('p')
        theMessage.textContent = messages[index]
        messageDiv[0].appendChild(theMessage);
        // messageDiv.appendChild(theMessage);
        this.value = ""
    }
    else{
        messageDiv.textContent = ""
    }
})

passInput.addEventListener('focus', function(e){
    this.classList.add('active')
})

passInput.addEventListener('blur', function(e){
    this.classList.remove('active')
})