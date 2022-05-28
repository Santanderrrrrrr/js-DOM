// document.body.cssText="display:inline;"

// const div = document.createElement('div')
// div.style.display = 'inline'
// document.body.appendChild(div);

// const docText = document.createElement('p')
// document.querySelector('div').appendChild(docText);

// const span = document.createElement('span')
// span.textContent = '|'
// span.cssText = "display:inline;"
// document.querySelector('div').appendChild(span);



const twoSpans = [...document.querySelectorAll("div span")]
const docText = twoSpans[0]
const cursor = twoSpans[1]

// // console.log(cursor.innerHTML)

let txts = ["to love and be loved: life's greatest redeemer", "We can only learn to love by loving.", "True love stories never have endings."]
let limiter = 0
let txt = txts[limiter]

let time = 40

let innerLimit = 0

// //  const nextTxt = ()=> {
    
// //     txt = txts[innerLimit]
// //     innerLimit++
// //  }

const disText = ()=>{
    docText.textContent += txt[innerLimit];
    console.log(txt)
    innerLimit++;
    
    if(innerLimit === txt.length) {
        // txt= txts[limiter++]
        clearInterval(houdini);
    }
    
}
// const blink = ()=>{
//     cursor.classList.toggle('active')
// }

const houdini = setInterval(disText, time)
// setInterval(blink, 400)

setTimeout(houdini, 400)