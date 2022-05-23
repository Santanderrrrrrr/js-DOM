const passInput = document.getElementById('pass');
const messageDiv = document.querySelector('div.message');
// const messageDiv = document.getElementsByClassName('message');
console.log(messageDiv);

// Dummy data
let message = "Hello and welcome"
let password = "IronMan"

passInput.addEventListener('input', function(e){
    console.log(this)
    if (this.value === password){
        let theMessage = document.createElement('p')
        theMessage.textContent = message
        // messageDiv[0].appendChild(theMessage);
        messageDiv.appendChild(theMessage);
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