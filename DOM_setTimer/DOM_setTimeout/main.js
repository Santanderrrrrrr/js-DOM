// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const docText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const txts = ['tekst1', 'tekst2', 'tekst3']

let activeLetter = 0;
let activeText = 0;

// console.log(txts[activeText][]);


// Implementacja
const addLetter = () => {
 // Użyj w środku setTimeout
 if (activeLetter >= 0) {
  docText.textContent += txts[activeText][activeLetter];
 }
 
 activeLetter++;
 if (activeLetter === txts[activeText].length) {

  activeText++;
  if (activeText === txts.length) return;

  return setTimeout(() => {
   activeLetter = -15;
   docText.textContent = '';
   addLetter();
  }, 2000)


 }
 setTimeout(addLetter, 100)

}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 cursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);