//Background changing color according to position
// const h1 = document.querySelector('h1');



// // const onTopBlur = document.createElement('div')
// // onTopBlur.classList.add('onTopBlur')
// // document.body.appendChild(onTopBlur)

// document.body.addEventListener('mousemove', function(e) {
//   const x = e.clientX ;
//   const y = e.clientY ;
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   h1.textContent = x + ", " + y;

//   const left = x / width * 100; //100 %
//   const right = y / height * 100;
//   const blue = ((x / width * 100) + (y / height * 100)) / 2;

//   movingDiv.style.backgroundColor = `rgb(${left}%, ${right}%, ${blue}%)`
//   movingDiv.style.left = `${left}%`
//   movingDiv.style.top = `${right}%`


// })



//Mouse changing color according to position
const posDisplay = document.querySelector('h1')

const movingDiv = document.createElement('div')
movingDiv.classList.add('movingAround')
document.body.appendChild(movingDiv)

document.body.addEventListener('mousemove', function(e){
  // console.log(e)
  
  let red = Math.ceil(e.clientX/window.innerWidth *255)
  let blue = Math.ceil(e.clientY/window.innerHeight *255)
  let green = ((red + blue))/2
  posDisplay.textContent = `${red}, ${blue}`
  // document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

  movingDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  movingDiv.style.top = `${(blue/255)*100}%`
  movingDiv.style.left = `${(red/255)*100}%`

})