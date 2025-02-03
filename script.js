const timerText = document.querySelector('.timer')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')


let timer;
let hours = 0, minutes = 0, seconds = 0;
let running = false;

startBtn.addEventListener('click',()=>{
    if(!running){
        running = true;
        timer = setInterval(updatetime, 1000)
    }
})
stopBtn.addEventListener('click',()=>{
    running = false;
    clearInterval(timer);
})
resetBtn.addEventListener('click',()=>{
    running = false;
    clearInterval(timer);
    hours = 0, minutes = 0, seconds = 0;
    timerText.innerHTML = "<hr>00 : 00 : 00<hr>"
})

function updatetime(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes = 0;
        hours++
    }
    timerText.innerHTML = 
    `<hr>${(hours < 10 ? '0' : '') + hours} : 
        ${(minutes < 10 ? '0' : '') + minutes} : 
        ${(seconds < 10 ? '0' : '') + seconds}<hr>`;
}