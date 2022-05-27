// function collectAnimals(...animals) {
//     const collection = []
//     collection.push(animals)
//     console.log(collection)
//     return collection
    
//     /*and here*/
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }


// function parseSentence({location,duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
//  console.log( parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }))

// var returnFirst = (items) => {const [firstItem] = items; return firstItem}

// var stuff = [1,2,3]
// var things = [3,0,9]

// console.log(returnFirst(stuff))
// console.log(returnFirst(things))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav,secondFav,thirdFav] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
// }

// console.log(returnFavorites(favoriteActivities))

// var combineAnimals = (...arrs) => [...arrs[0],...arrs[1],...arrs[2]]
// var combineAnimals = (...arrs) => arrs.map(items => items.map(things => things))


// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// var product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)

// console.log(product(1,2,3,2,1))

// var unshift = (array,...things) => [...things,...array]


// const animals = ['dog','cat','bird']

// console.log(unshift(animals,1,2,3,4,5))

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");  
        let nameCard = {firstName, lastName} = {firstName: name[0], lastName: name[1]}
        return nameCard
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones", 'Tracey Herrera','Sarah Peterson']))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


// var populatePeople = (names) => names.map(name => { name = name.split(" "); console.log(name); let {firstName, lastName} = name; console.log (name)})

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]