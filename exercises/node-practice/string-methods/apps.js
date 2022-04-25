const prompt = require('prompt-sync')({signet: true});
const userString = prompt("Please enter a string: ")

// function capitalizeAndLower(userString){
//     var capitalize = userString.toUpperCase()
//     var lower = userString.toLowerCase()
//     var concat = capitalize.concat(lower)
//    console.log(concat)
//     return userString

// }

// capitalizeAndLower(userString)

// function roundDown(userString){
//     var halfLength = Math.floor(userString.length / 2)
//     console.log(halfLength)
// }

// roundDown(userString)

// function firstHalf(userString){
//     var halfLength = Math.floor(userString.length / 2)
//     var firstHalf = userString.slice(0,halfLength)
//     console.log(firstHalf)
// }

// firstHalf(userString)

function halfUpperHalfLower(string){
    var halfLength = Math.floor(string.length / 2)
    var firstHalf = string.slice(0,halfLength)
    var lastHalf = string.slice(halfLength)
    var capitalizeFirst = firstHalf.toUpperCase()
    var lowerLast = lastHalf.toLowerCase()
    var concat = capitalizeFirst.concat(lowerLast)
    // var firstHalfIndex = firstHalf.lastIndexOf(firstHalf)
    // console.log(firstHalf)
    // console.log(lastHalf)
    console.log(concat)
    // console.log(firstHalfIndex)
}

halfUpperHalfLower(userString)