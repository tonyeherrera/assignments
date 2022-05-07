const form = document.form

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    const goombas = form.goombas.value
    const goombasPrice = 5
    const goombasTotal = goombas * goombasPrice
    console.log(goombasTotal)

    const bobs = form.bobs.value
    const bobsPrice = 7
    const bobsTotal = bobs * bobsPrice

    const cheeps = form.cheeps.value
    const cheepsPrice = 11
    const cheepsTotal = cheeps * cheepsPrice
    console.log(cheepsTotal)

    const total = document.getElementById("total")
    const pestTotal = goombasTotal + bobsTotal + cheepsTotal 
    console.log(`Total Due: ` + pestTotal + ` coins.`)
    total.textContent = `Total Due: ` + pestTotal + ` coins.`
    total.setAttribute("class","total")

})