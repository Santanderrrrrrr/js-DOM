const movingMad = document.querySelector('div')

let decider = false;

let insertDivX;
let insertDivY;

movingMad.addEventListener('mousedown', function(e){
    // movingMad.style.left = `${(e.clientX/window.innerWidth)*100}%`
    movingMad.style.backgroundColor = "grey"
    
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;

    console.log(insertDivX, insertDivY)
    console.log(e)

    decider =true;
    
})

movingMad.addEventListener('mousemove', function(e){
    if(decider){    
        // movingMad.style.right =`${(e.clientX/window.innerWidth)*100}%`
        movingMad.style.left = `${e.clientX-insertDivX}px`
        movingMad.style.top = `${e.clientY-insertDivY}px`
    }        
})

movingMad.addEventListener('mouseup', function(e){
    // movingMad.style.right =`${(e.clientX/window.innerWidth)*100}%`
    movingMad.style.backgroundColor = "black"
    // movingMad.removeEventListener('mousemove')
    decider = false;

})