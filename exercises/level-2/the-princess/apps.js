const readlineSync = require('readline-sync');
let star

class player {
    constructor(name = "Petunia", totalCoins = 0, status = "Small", hasStar = "noHasStar"){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked){
        var namePicked = readlineSync.question(`Would you like to play as (m)Mario or (l)Luigi?`)
        
        if (namePicked === "m"){
            name = "Mario"
            console.log(`It's a Mario!`)
        }else if (namePicked === "l"){
            name = "Luigi"
            console.log(`Luigi time!`)
        }   
        }
    gotHit(){
        if (status === "Small"){
            status = "Dead"
            stop()
            
        }else  if(status === "Big"){
            status = "Small"
        }else if (status === "Powered Up"){
            if (hasStar === "hasStar"){
                hasStar = "noHasStar"
            }else if (hasStar === "noHasStar"){
            status = "Big"
    }}}
    gotPowerup(){
        if (status === "Powered Up"){
            hasStar = "hasStar"
        }else if (status === "Big"){
            status = "Powered Up"
        }else   if (status === "Small"){
            status = "Big"
    }}
    addCoin(){
        totalCoins ++
    }
    print(){
        console.log(`\nName: ${name} \nTotal Coins: ${totalCoins} \nStatus: ${status} \nhasStar: ${hasStar}`)
    }
}

function chances(){ 
    let chance = Math.floor(Math.random()*3)
    // console.log(chance)
if (chance === 0 ){
    newPlayer.gotHit()
}else if (chance === 1){
    newPlayer.gotPowerup()
}else if(chance === 2){
    newPlayer.addCoin()
}
newPlayer.print()
}

let play 
function start() { 
    play = setInterval(chances, 1000)}
function stop(){
    clearInterval(play)
    console.log("You Dead!")
    let playAgain = readlineSync.keyInYN(`Wanna give it another go?`)
    if(playAgain === true){
        status = "Small"
        totalCoins = 0
        start()
    }else{
        process.exit()
    }
}



    
const newPlayer = new player()
let {name,totalCoins,status,hasStar} = newPlayer
newPlayer.setName()
readlineSync.keyInPause(`Hi ${name}. You currently have ${totalCoins} coins and are ${status}.`)
start()


