// http://websamuraj.pl/examples/js/projekt11/
//Alt trial using Date.now()
const startBtn = document.querySelector(".main")
const resetBtn = document.querySelector(".reset")

const timeDisplay = document.querySelector(".time div")

// console.log(timeDisplay.textContent)

let nowTime;
let whatToDisplay = 0;
let timerInterval;
let runningBoolean = false;


const intervaling =()=>{
    timeDisplay.textContent = parseInt(Math.floor((Date.now()-nowTime)/(1000)))
     
}


resetBtn.addEventListener("click", (e)=>{
    startBtn.textContent = "Start"
    timeDisplay.textContent = "---"
    runningBoolean = false
    whatToDisplay = 0
    clearInterval(timerInterval)
})


startBtn.addEventListener("click", (e) =>{

    if(!runningBoolean){
        nowTime = parseInt(Math.floor((Date.now() / (1000))))
        e.target.textContent = "Pause"
        runningBoolean = true
        timerInterval = setInterval(intervaling, 1000)
    }else{
        e.target.textContent = "Start"
        runningBoolean = false
        clearInterval(timerInterval)
    }

    // e.target.textContent = "Pause"
    // const nowTime = Date.now()

    // timeSinceStart += (Date.now() - nowTime)
    // console.log(timeSinceStart)
    // timeDisplay.textContent = timeSinceStart
    // }

    
    // let nowTime = parseInt(((Date.now() / 1000)%60).toFixed(3))

    // const onStart=()=>{
    //     onStartTime = Date.now()
    //     nowTime+= parseInt(Math.floor(((onStartTime-nowTime) / 1000)%60).toFixed(3))

    //     timeDisplay.textContent = nowTime
        
        
    // }
    
    // if(!runningBoolean){
    //     runningTime = setInterval(onStart, 1000)
    //     runningBoolean = true;
    //     e.target.textContent = "Pause"
    // }else{
    //     e.target.textContent = "Start"
    //     runningBoolean = false;
    //     clearInterval(runningTime)
        
    // }
  
    
})

