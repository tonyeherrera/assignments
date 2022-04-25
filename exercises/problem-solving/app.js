var fizz = ""
var buzz = ""
var fizzbuzz = ""

for (var i=1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
        fizzbuzz ++
    }if (i % 3 === 0 && i % 5 !== 0){
        console.log("fizz")
        fizz ++
    }if (i % 3 !== 0 && i % 5 === 0){
        console.log("buzz")
        buzz ++
    }else{
        console.log(i);
}}

console.log("fizz " + fizz + " | " + " buzz " + buzz + " | " + " fizzbuzz " + fizzbuzz)