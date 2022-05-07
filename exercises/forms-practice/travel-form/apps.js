const form = document.form
form.addEventListener("submit",(event) =>{
    event.preventDefault()
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const gender = form.gender.value
    const destination = form.destination.value
    const considerations = form.considerations
    const diet = []
    for(i = 0; i < considerations.length; i++){
        if (considerations[i].checked)
        diet.push(considerations[i].value)
    }
    alert(`Congratulations on booking your next trip. Find the details of this booking below.\n \nFirst Name: ` + firstName + `\nLast Name: ` + lastName + `\nGender: ` + gender + `\nDestination: ` + destination + `\nDietary Considerations: ` + diet)
})