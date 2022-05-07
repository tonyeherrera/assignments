const addForm = document.add
const subForm = document.sub
const mulForm = document.mul
const output = document.getElementById("output")

addForm.addEventListener("submit", function(event){
    event.preventDefault()
    let numOne = parseInt(addForm.addNumOne.value)
    let numTwo = parseInt(addForm.addNumTwo.value)

    output.textContent = numOne + numTwo
    output.style.color = "rgb(120, 27, 35)"

    addForm.addNumOne.value = ""
    addForm.addNumTwo.value = ""
})

subForm.addEventListener("submit",function(event){
    event.preventDefault()
    let numOne = subForm.subNumOne.value
    let numTwo = subForm.subNumTwo.value

    output.textContent = numOne - numTwo
    output.style.color = "rgb(45, 45, 107)"

    subForm.subNumOne.value = ""
    subForm.subNumTwo.value = ""
})

mulForm.addEventListener("submit",function(event){
    event.preventDefault()
    let numOne = mulForm.mulNumOne.value
    let numTwo = mulForm.mulNumTwo.value

    output.textContent = numOne * numTwo
    output.style.color = "rgb(61, 114, 56)"

    mulForm.mulNumOne.value = ""
    mulForm.mulNumTwo.value = ""
})