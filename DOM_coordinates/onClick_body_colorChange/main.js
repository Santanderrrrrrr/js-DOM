// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener("click", function(e){
    let X = e.clientX
    let Y = e.clientY

    console.log(`${X}, ${Y}`)

    if (X%2==0 && Y%2==0){
        document.body.style.backgroundColor= `rgb(255,0,0)`
    }
    else if (X%2==1 && Y%2==1){
        document.body.style.backgroundColor= `rgb(0,0,255)`
    }
    else{
        document.body.style.backgroundColor= `rgb(0,255,0)`
    }
})