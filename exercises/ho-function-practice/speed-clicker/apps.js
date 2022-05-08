let count = 0
let time = 10
const timer = document.getElementById("timer")
const counter = document.getElementById("counter")
const toBeat = document.getElementById("highScore")
let counting = ''
let highScore = localStorage.getItem("highScore")

toBeat.textContent = "Your High Score is: " + highScore

setTimeout(()=>{
    counter.textContent = "Ready"
},500)

setTimeout(()=>{
    counter.textContent = "Set"
},1000)

setTimeout(()=>{
    counter.textContent = "Go!"
},1500)

setTimeout(something,1501)
setTimeout(listen,1501)

function something(){
    counting = setInterval(countDown,1000)
}
function stop(){
    clearInterval(counting)
}

function yaDone(){
    console.log("yaDone")
    document.getElementById("button").removeEventListener("click",click)
    counter.textContent = "Your final score was: " + count
    if (count > highScore){
    localStorage.setItem("highScore",count)
    }
}

setTimeout(yaDone,11600)
setTimeout(stop,11600)

function listen(){

    document.getElementById("button").addEventListener("click",click
)}



function countDown(){
    time --
    timer.textContent = time
}

function click(){
    count ++
    counter.textContent = count
}


