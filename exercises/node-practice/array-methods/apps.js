var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()

fruit.shift()

var indexOrange = fruit.indexOf("orange")

fruit.push(indexOrange)

var vegetablesLength = vegetables.length

vegetables.push(vegetablesLength)

var food = fruit.concat(vegetables)

food.splice(4,2)

food.reverse()

var foods = food.join(",")


// console.log("fruit:",fruit);
// console.log("vegetables:",vegetables);
// console.log("food:",food)
console.log(foods)