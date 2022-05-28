const spnText = document.querySelector('.text');
const txt = "Love enslaves, but to die having not loved, is to have not lived free."
// Parametry
let indexText = 0;
const time = 40;

// Implementacja
const addLetter = () => {
    indexText++;
    spnText.textContent += txt[indexText];
    
    if (indexText === txt.length) clearInterval(indexTyping);
}
// const indexTyping = setInterval(addLetter, time);