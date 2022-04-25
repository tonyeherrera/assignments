let adventurerName = ""
let heroLocation = "village"
let inventory = ["Light Rune"]
let said = false
const newItem = "NEW ITEM added to inventory* "
let encounters = 0
const forestFoe = ['Orc','Wicked Woods','Giant Widow']
const caveFoe = ['Cave Goblin','Bats','pickle']
let hp = 100
let atk = 10
let crt = 2
let def = 1
let defeated = false
function demonSlayer(){
    atk = atk + 10
    def = def + 1
    confirm(newItem + `'Demon Slayer: A sturdy blade enveloped in a green flame. Demon Slayer is stronger than a common adventurers blade yet lighter, thus increasing damage and ones ability to parry`)
    inventory.push("Demons Edge")
}
function dragonPiercer(){
    atk = atk + 5
    crt = crt + 4
    confirm(newItem + `'Dragon Piercer: A small swift dagger capable of piercing a dragons natural armor.The spine of the blade is adorned with an elven inscription that glows a deep midnight purple.`)
    inventory.push("Dragon Piercer")
}
function goblinGobbler(){
    atk = atk + 20
            confirm(newItem + `'Goblin Gobbler: A heafty two handed mace. The orb at its tip radiates a golden hue. Deals a large amount of damage if you're able to land a strike.`)
            inventory.push("Goblin Gobbler")
}
function durex(){
    def = def + 3
    confirm(newItem + `'Durex: Not quite a magnum sized shield, it fits in one hand leaving the other free to use as desired. Studded with various elven gems, this shield is sure to help you defend against the Zolgozd'z strongest STDs (sinisterly terrifying denizens) `)
    inventory.push("Durex")
}

const welcome = prompt("Hello adventurer and welcome to Gozdvas. What may I call you?")

if (welcome === null){
    unwilling()
}else{
    whatsName()
    callToArms()
}

function whatsName(){
if(welcome === ""){
    adventurerName = "Petunia"
}else{
    adventurerName = welcome
}}

function callToArms(){
    const callToArms = confirm(`Are you here to answer Gozdvas' call for a hero `+ adventurerName + `?`)
    if (callToArms === true){
        quest()
    }if (callToArms === false){
        unwilling()
}}

function unwilling(){
    if(!alert(`I hope a fearless adventurer will come to our rescue soon...`)){
        window.location.reload()}}

function quest(){
   const theTale = confirm(`To truly understand this quest I must tell you our story from the begining...
    Our humble villages has been nesseled here in the outskirts of the fabled Zolgozd, a wicked forest know by many and fear by all. You may ask, why ever would your kind have settled in such a land? The answer is actually quite simple, you see, the dark elves of Gozdvas are known for crafting divine equipment, and our secret lies at the heart of Zolgozd. There, deep within the forest is a cave, the only cave in Bajok, whos wall contain zmajskibane. This precious metal paired with dark eleven magic allow us to forge the most sought after equipment in all of Bajok. 
    Recently our miners were opening a new tunnel and found themselves in a colossal cavern. That day Gozdvas was ingulfed in a dark fog. We're not sure how the miners made it back from the caves, just that they were all laying unconcious at entrance to Zolgozd. A few have made attempts to seek out the cause of the fog in an effort to resume our mining but none have succeed, and all who have entered the forest have yet to return. Our lively hood relies on the zmajskibane in those caves, and without it our village cannot continue here. Please ` + adventurerName + `, will you help us?`)
    if(theTale === true){
        toTheCaves()
    }else if(theTale === false){
        unwilling()
    }
}

function toTheCaves(){
    var weapon = prompt(`You venture to the east side of the village, where the entrance to Zolgozd lies. The fog is so dense and dark here at the forest's entrance that you can barley make out the trees. You reach a hand into the fog before you. The fog ripples and glows as your hand passes through, as if there is a magical barrier dividing the village from Zolgozd. "Wait!!" A young elf calls behind you. "Please, before you go, my village would like to lend you one of these fine pieces of equipment." Which will you take? (S)Sword (D)Dagger (M)Mace (SH)Shield (N)None of Them, nothing compares to my own gear!`)
    herosWeapon = weapon.toUpperCase()
    switch(herosWeapon){
        case "S":
           demonSlayer()
        break;
        case "D":
           dragonPiercer()
        break;
        case "M":
            goblinGobbler()
        break;
        case "SH":
           durex()
        break;
        case "N":
            confirm(adventurerName + `: "I'm good kid, nothing compares to the gear I'm Packing!" \n Young Dark Elf: "Whatever you say, It's your funeral...."`)
        break;
        case "FIRE SALE":
            demonSlayer()
            dragonPiercer()
            goblinGobbler()
            durex()
    }
    print()
    enterForest()
}

function print(){
    confirm("Name: " + adventurerName + `n\Location` + heroLocation + "\nHP: " + hp + "\nAttack: " + atk + "\nDefense: " + def + "\nCritical Attack: " + crt + "\nInventory: " + inventory + `n\Encounters: ` + encounters)
}

function enterForest(){
    confirm(`You walk through the vail between the village and Zolgozd and are instantly overcome by an intense dark chill. Visibility is extremely low and you pull the Light Rune from your pack.  It doesn't help much but it allows you to see the path laid before you. you cant help but feel that this forest is not ok with your presence.`)
}

function walk(){
    if(encounters < 4){
        heroLocation = "forest"
    }else{
        heroLocation = "cave"
    }
    if (encounters === 3 && said !== true){
        theCaves()
    }
    let chance = Math.floor((Math.random()*2)+1)
    switch(chance){
        case 1:
            uneventful()
        break;
        case 2:
            fight()
        break;  
    }
}



function theCaves(){
    heroLocation = "cave"
    said = true
    confirm(`The journey through Zolgozd was arduous to say the least, but now you approach the entrance to the caves. You fear the worst is yet come. Theres a stench eminating from the cave that you cant quite put your finger on; peppery and vile. You've made it this far, no turning back now!`)
}

function uneventful(){
    if(heroLocation === "forest"){
        alert("The forest is quite, too quite. You cant help but feel like your being watched.")
        choice()
        
    }else if(heroLocation === "cave"){
        alert("The damp musky smell of the cave is overwhelming. At least there haven't been any unwelcome suprises in a while.")
        choice()
        
    }
}

function fight(){
    encounters ++
    if(encounters > 6){
        dragon()
    }else{
        if(heroLocation === "forest"){
            forestFight()
        }else if(heroLocation === "cave")
            caveFight()
        choice()
    }
}

function choice(){
    let journey = prompt(`Would you like to: (w)Continue Walking or (p) print your current stats?`)
    if (journey === "w"){
        alert("You continue on your quest")
    }else if (journey === "p"){
        print()
    }
}

function forestFight(){
    let beast = Math.floor((Math.random()*3)+1)-1
    let beastEncountered = forestFoe[beast]
    alert(beastEncountered)
}

function caveFight(){
    let beast = Math.floor((Math.random()*3)+1)-1
    let beastEncountered = caveFoe[beast]
    alert(beastEncountered)
}

function dragon(){
    const dragonEncounter = alert("The Dragon was sleeping so you cut of its head with no resistance. The fog disipates and you carry the head back tot the village. They are so happy they make you their king. But there is already a king in this land so he sends his menions to be head you and thus ends the tale of " + adventurerName)
    defeated = true
    alert(`You WON!!`)
    window.location.reload()
    
    

}
while (hp > 0 && defeated !== true){
    walk()
}