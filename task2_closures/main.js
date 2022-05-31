function timerFunction(setSum) {
    let theTime = setSum;
    return setInterval(function(){
        theTime++
        document.body.textContent = `Since Launching this page, this amount of time, in seconds has passed: ${theTime}`
    }, 1000)
} 

let timer = timerFunction(9)
timer()