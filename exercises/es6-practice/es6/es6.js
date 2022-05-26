// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])
 
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) => arr.map(carrot => {type},{name})

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => {return {type: "carrot", name: carrot }})
// }
// console.log(mapVegetables(carrots))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }

// console.log(filterForFriendly(people))

// var doMathSum = (a,b) =>  a + b

// var produceProduct = (a,b) => a*b
   
// console.log(produceProduct(2,3))
// console.log(doMathSum(2,3))

// var printString = (firstName = `Jane`, lastName = `Doe`, age = 100) => `Hi ${firstName} ${lastName} , how does it feel to be ${age}?`


// console.log(printString('Kat','Stark',40))
// console.log(printString())
// Hi Kat Stark, how does it feel to be 40?

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  var filterForDogs = arr => arr.filter(animal => animal.type === "dog" )
 
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

//  console.log(filterForDogs(animals))

var message = (location,name) => `Hi ${name}! \nWelcome to ${location} \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
 
// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

console.log(message('Hawaii','Janice'))