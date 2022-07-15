var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function cipher(){
    let textToString = input.split("")
    let index
    let newLetter
    let cipherArr =[]
    textToString.map(char => {
        if(char.match("^[a-z]$") !== null){
            alphabet.map(letter => {
                if(char === letter) {
                    index = alphabet.indexOf(letter)
                    newShift = Math.floor((index + shift)/26)
                    if(newShift === 0){
                        newIndex = index + shift
                    }else{
                        newIndex = (index + shift) - (newShift * 26)
                    }
                    newLetter = alphabet[(newIndex)]
                    cipherArr.push(newLetter)
                }  
            })
        }else{
            cipherArr.push(char)
        }
    })
    let encoded = cipherArr.join("")
    console.log(encoded)
}

cipher()