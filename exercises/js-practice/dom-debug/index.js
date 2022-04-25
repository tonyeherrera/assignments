const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", e =>{
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
});
function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value + " " 
    subItem.textContent = subItemValue;
    const dropDown = createDropDown()
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");
    subItem.style.backgroundColor = "red";
   console.log(subItem);
    return subItem;
}
function createDropDown(){
    var dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        var option = document.createElement("option") 
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    }
    dropDown.addEventListener("change", e =>{
        var targetValue = e.target.parentElement
        console.log(targetValue);
        // console.log(e.target.parentElement);
       targetValue.style.backgroundColor = e.target.value
    });
    console.log(dropDown);
    return dropDown;
};




