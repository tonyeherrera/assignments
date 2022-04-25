var letterInQuestion = ""
function doubleLetterGetter(userString){
    var letterArr = userString.split("")
    console.log(letterArr)
    for ( var i = 0; i < letterArr.length; i++){
        if ( letterArr[i] === letterInQuestion){
            delete letterArr[i]
        }else{
            var letterInQuestion = letterArr[i]
            console.log(letterInQuestion)
        }
     }
    var newString = letterArr.join("")
    // return(newString)
    console.log(newString)
}  

doubleLetterGetter("HHEELLLLOO WWOORRLLDD!!")
