// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const messageDiv = document.querySelector("div")

//dummy data
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]


///////////////////////////////solution one
// const showMessage = (e) => {
//  //tutaj rozwiązanie
//  // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)
 
// //  messageDiv.textContent = ""
//  const passwords2 = passwords.map((pw)=>{
//     return pw.toLowerCase();
//  })
//  console.log(passwords2)
//  index = passwords2.indexOf(e.target.value);
//  console.log(index)
//  if(index>=0){
//     messageDiv.textContent = messages[index]
//  }
 
// }

/////////////////////////////Solution two
const showMessage = function(e) {
    if(e.target.value){
        passwords.forEach((pw, i)=>{
            if(this.value.toLowerCase() === pw.toLowerCase()){
                messageDiv.textContent = messages[i]
            }
            // this.value === pw.toLowerCase() ? messageDiv.textContent = messages[i] : messageDiv.textContent =""
        })
        
    }else{
        messageDiv.textContent = ""
    }
    
}

input.addEventListener("input", showMessage)



