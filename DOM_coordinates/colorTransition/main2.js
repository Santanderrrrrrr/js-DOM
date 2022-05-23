const bkg = document.querySelector('body')

let red = 100;
let blue = 100;
let green = 100;

bkg.style.backgroundColor = `rgb(${red},${green},${blue}`

bkg.addEventListener('keydown', function(e){
    
    switch (e.keyCode) {
        case 38:
            bkg.style.backgroundColor=`rgb(${red >=255? red : red++}, ${green>=255? green : green++}, ${blue >=255? blue : blue++})`
            console.log(`${red}`)
            break;
        case 40:
            bkg.style.backgroundColor=`rgb(${red<=0? red : --red}, ${green<=0? green : --green}, ${blue<=0? blue : --blue})`
            console.log(`${red}`)
            break;
    
        default:
            break;
    }
})