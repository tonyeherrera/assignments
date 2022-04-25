var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computerCount = 0;
for ( var i = 0; i < officeItems.length; i ++){
    if(officeItems[i] === "computer"){
        computerCount ++;
    }
    
}
console.log("We have " + computerCount + " computers.")

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.")
        }else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in.")
        }
    }else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max Fury Road")
        }else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She's good to see Mad Max Fury Road.")
    }
}}

var arr1 = [2, 5, 435, 4, 3]
var arr2 = [1, 1, 1, 1, 3]
var arr3 = [9, 3, 4, 2] 
var prompt = require('prompt-sync')({signet: true})
var userInput = prompt("Please type either arr1, arr2, or arr3: ")
var total = 0

switch(userInput){
    case "arr1":
        var numArr = arr1;
    break;
    case "arr 2":
        var numArr = arr2;
    break;
    case "arr3":
        var numArr = arr3
    break;
}
// console.log(numArr)


for (var i = 0; i < numArr.length; i++){
   var  total = total + Number(numArr[i])
}
// console.log(total)
if (total % 2 === 0){
    console.log("The light is off.")
}else if (total % 2 !== 0){
    console.log("the light is on.")
}
