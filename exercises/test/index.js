// Write a function that will take a string and return the number/count of instances of vowels in that string.  (give student a few minutes to get started and a max of 5 minutes to complete)

function vowelCount(string){
    let count = 0
   let newString =  string.split('')
    for(var i= 0; i < newString.length; i++){
        if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u')
        count ++
    }
    console.log(count)
}

vowelCount("because")

may june july april

