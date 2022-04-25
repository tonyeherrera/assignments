// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// for (var i = 9; i >= 0; i--){
//     console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

// var countingForward = []
// for (var i = 0; i < 10; i++){
//     countingForward.push(i);
// }
// console.log(countingForward)

// var countingEven = []
// for (var i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         countingEven.push(i)
//     }
// }
// console.log(countingEven)

// const evenFruit = []
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < fruit.length; i++){
//     if (i % 2 !== 0){
//         evenFruit.push(fruit[i])
//     }
// }
// console.log(evenFruit)

// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// for (i = 0; i < peopleArray.length; i ++){
//     console.log(peopleArray[i].name)
// }

// var people = []
// var occupations = []
// for (var i = 0; i < peopleArray.length; i++){
//     people.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }
// console.log(people)
// console.log(occupations)

// var oddPeople = []
// var evenOccupations = []
// for (var i = 0; i < peopleArray.length; i++){
//     if (i % 2 === 0){
//         oddPeople.push(peopleArray[i].name)
//     }if (i % 2 !== 0){
//         evenOccupations.push(peopleArray[i].occupation)
//     }
// }
// console.log(oddPeople)
// console.log(evenOccupations)

var matrix = [[],[],[]]

// for (var i = 0; i < 3; i++){
//     for(var j = 0; j < 3; j++){
//         matrix[i].push(0);
 
// // }
//     }}

// for (var i = 0; i < 3; i++){
//     for (var j = 0; j < 3; j++){
//         if (i === 0){
//             matrix[i].push(0)
//         }if (i === 1){
//             matrix[i].push(1)
//         }if (i === 2){
//             matrix[i].push(2)

//         }
//     }

// }

for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
        if (j === 0){
            matrix[i].push(0)
        }if (j === 1){
            matrix[i].push(1)
        }if (j === 2){
            matrix[i].push(2)

        } 
    }

}
console.log(matrix)

for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
       matrix[i].splice(j)
       matrix[i].splice(j,1,"x")
    }

}
console.log(matrix)