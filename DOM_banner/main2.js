const imagesNtitles = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
   },
   {
    img: "images/img2.jpg",
    text: 'Drugi tekst'
   },
   {
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
   }]

const slider = document.querySelector('img')
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

console.log(dots)

let whichIndex = 0;
const maxNum = imagesNtitles.length;

const dotAlong = () => {
    const currDotIndex = dots.findIndex(dot => dot.classList.contains('active'));
    dots[currDotIndex].classList.remove('active')
   
    dots[whichIndex].classList.add('active')

}

const changeSlide = function(){
    whichIndex++;
    
    if(whichIndex==maxNum){
        whichIndex = 0;
    }
    console.log(whichIndex)
    slider.src = imagesNtitles[whichIndex].img
    h1.textContent = imagesNtitles[whichIndex].text
    dotAlong()
    
    
}

let indexInterval = setInterval(changeSlide, 3000)


const keySlider = (e)=>{
    if(e.keyCode === 37 || e.keyCode === 39){
        console.log(e.keyCode)
        clearInterval(indexInterval)
    
        e.keyCode === 37 ? whichIndex-- : whichIndex++;

        if (whichIndex === maxNum) {
            whichIndex = 0;
        } else if (whichIndex < 0) {
            whichIndex = maxNum - 1;
        }
        slider.src = imagesNtitles[whichIndex].img;
        h1.textContent = imagesNtitles[whichIndex].text;
        dotAlong();
        indexInterval = setInterval(changeSlide, 3000)
    }
}

window.addEventListener("keydown", keySlider)