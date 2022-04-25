 const readline = require("readline-sync")
const prompt = require('prompt-sync')({signet: true});
const num1 = prompt('Please enter your first number: ');
const num2 = prompt('Please enter your second number: ');
const operation = prompt('Please enter the operation to perform (add, sub, mul, or div): ')
// console.log(num1);
// console.log(num2);
// console.log(operation);
var consoleScript = "The result is" + " ";

function add(){
    var sum = Number(num1) + Number(num2);
    return (sum);
    console.log(consoleScript + sum);
}

function sub(){
    var dif = Number(num1) - Number(num2);
    return (dif);
    console.log(consoleScript + dif);
}

function mul(){
    var pro = Number(num1) * Number(num2);
    return (pro);
    console.log(consoleScript + pro);
}

function div(){
    var quo = Number(num1) / Number(num2);
    return (quo);
    console.log(consoleScript + quo);
}


switch(operation){
    case "add":
        var sum = add();
        console.log(consoleScript + sum);
    break;
    case "sub":
        var dif = sub();
        console.log(consoleScript + dif);
    break;
    case "mul":
    var pro = mul();
    console.log(consoleScript + pro);
    break;
    case "div":
    var quo = div();
    console.log(consoleScript + quo);
    break;
    default:
    console.log("Sorry, I'm not sure how to do that.");
}
// function subtract(num1, num2){
//     var difference = num1 - num2;
//     return (num1 + num2);
//     console.log(consoleScript + difference )
// }
