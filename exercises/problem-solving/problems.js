// largest = [3,5,2,8,1]
// newRecord = ""
// for (i = 0; i < largest.length; i ++){
//     if (newRecord < largest[i] ){
//         newRecord = largest[i]
//         console.log("The new record is " + newRecord + "!")
//     }else{
//         console.log("The best is still only " + newRecord + ".")
//     }
// }


// function whosGotIt(arr,char){
//     newArr = []
//     for (i=0; i < arr.length; i++)
//     if (arr[i].includes(char)){
//         newArr.push(arr[i])
//     }
//     console.log(newArr)
// }

// whosGotIt(["#3", "$$$", "C%4!", "Hey!"], "!")

function doesItDiv(num1,num2){
    if(num1 % num2 === 0){
        console.log('true')
    }else {
        console.log('false')
}}

doesItDiv(8,4)
doesItDiv(3,2)
doesItDiv(9,18)