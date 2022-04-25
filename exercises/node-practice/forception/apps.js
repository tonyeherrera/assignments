var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var forception = []

// var upperCase = alphabet.toUpperCase
var upperCase = alphabet.toUpperCase()
var alphabetBetter = upperCase.split("")


for (var i = 0; i < people.length; i++){
    forception.push(people[i] + ":")
    for (var j = 0; j < alphabetBetter.length; j ++){
        // alphabetBetter[j].toUpperCase()
        forception.push(alphabetBetter[j])
    }
}
console.log(forception)