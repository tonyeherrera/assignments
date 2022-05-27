
const todoList = document.getElementById('todoList')
function getList() {
    axios.get("https://api.vschool.io/tonyeherrera/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}

function listData(data){
    clearList()
    for (let i = 0; i < data.length; i++){
        
        const newTodoDiv = document.createElement('div')
        newTodoDiv.setAttribute("id",data[i]._id)
        

        const h1 = document.createElement("h1")
        h1.textContent = data[i].title
        h1.setAttribute('id',data[i].title)
       
        const h2 = document.createElement('h2')
        h2.textContent = data[i].description

        
        const image = document.createElement('img')
        // console.log(data[i].imgUrl)
        if(isImage(data[i].imgUrl) === false){
            image.src = "https://th.bing.com/th/id/OIP.yHrP1XP9nGoetObf102rvwHaFE?w=255&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        }else {
            image.src = data[i].imgUrl
        }

        const subDiv = document.createElement('div')
        

        let priority = ""
        const h3 = document.createElement('h3')
        if (data[i].price === 0){
            priority = "Low"
            h3.style.color = "yellow"
        }
        if (data[i].price === 1){
            priority = "Medium"
            h3.style.color = "orange"
        }
        if (data[i].price === 2){
            priority = "High"
            h3.style.color = "red"
        }
        h3.textContent = `Level of Priority: ${priority}`
        
        const checkbox = document.createElement('input')
        const checkboxLabel = document.createElement('label')
        checkboxLabel.textContent = "Complete"
        checkbox.setAttribute('type',"checkbox")
        checkbox.setAttribute("onclick","toggleCompleted(event)")

        if(data[i].completed === true){
            h1.setAttribute("style","text-decoration:line-through")
            h2.setAttribute("style","text-decoration:line-through")
            h3.setAttribute("style","text-decoration:line-through")
            image.setAttribute("style","filter:drop-shadow(green)")
            checkbox.checked = true
            checkboxLabel.textContent = "Completed"
            checkboxLabel.style.color = "green"
            checkbox.style.backgroundColor = "green"
            image.style.backgroundColor = "green"
            image.style.opacity = "30%"
        }else if (data[i].completed === false){
            checkbox.checked = false
            checkboxLabel.textContent = "Complete?"
        }
        // const deleteButton = document.createElement('button')
        // deleteButton.setAttribute()
        const line = document.createElement('hr')
        const buttonDiv = document.createElement('buttonDiv')
        const remove = document.createElement('button')
        remove.setAttribute("onclick","remove(event)")
        remove.textContent = "Remove"
        const edit = document.createElement('button')
        edit.setAttribute("onclick","edit(event)")
        edit.textContent = "Edit"

        newTodoDiv.setAttribute('class','todo-item')
        newTodoDiv.appendChild(h1)
        newTodoDiv.appendChild(h2)
        newTodoDiv.appendChild(image)
        subDiv.appendChild(h3)
        subDiv.appendChild(checkbox)
        subDiv.appendChild(checkboxLabel)
        buttonDiv.appendChild(edit)
        buttonDiv.appendChild(remove)
        newTodoDiv.appendChild(subDiv)
        newTodoDiv.appendChild(buttonDiv)
        newTodoDiv.appendChild(line)
        todoList.appendChild(newTodoDiv)
        
    }
   
}

function isImage(url){
   return (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url))
}

function clearList(){
    while (todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
}
    
form.addEventListener("submit",function(e){
    e.preventDefault()
    let userPrice = ""

    if(form.priority.value
         === "Low"){
        userPrice = 0
    }else if(form.priority.value === "Medium"){
        userPrice = 1
    }else if(form.priority.value === "High"){
        userPrice = 2
    }
  
    
    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value,
        price: userPrice,
        completed: false
    }
    axios.post("https://api.vschool.io/tonyeherrera/todo", newTodo)
        .then(response => getList())
        .catch(error => console.log(error))
    form.title.value = ""
    form.description.value = ""
    form.imgUrl.value = ""
    form.priority.value = ""
   
})

function toggleCompleted(event){
    const id = event.target.parentElement.parentElement.id
    const parentId = event.target.parentElement.parentElement.id
    console.log(parentId)
    let toggle = {}
    console.log(event.target.checked)
    if (event.target.checked === true){
        toggle = {completed: true} 
    }else if (event.target.checked === false){
        toggle = {completed: false}
    }
        axios.put(`https://api.vschool.io/tonyeherrera/todo/${id}`, toggle)
        .then(response => getList())
        .catch(error => console.log(error))
 
}

function remove(event){
    const id = event.target.parentElement.parentElement.id
    console.log(id)
    axios.delete(`https://api.vschool.io/tonyeherrera/todo/${id}`)
            .then(response => getList())
            .catch(error => console.log(error))
 
   
}
function edit(event){

    const id = event.target.parentElement.parentElement.id
    const parent = document.getElementById(id)
    console.log(parent.id)
    const children = parent.children
    const childArr = []
    for(let i = 0;i < 4; i++){
        childArr.push(children[i].textContent)
    }
    console.log(childArr[1])
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
    const updateForm = document.createElement('form')
    updateForm.setAttribute("name","updateForm")
    const newTitle = document.createElement('input')
    newTitle.setAttribute('name','newTitle')
    newTitle.value = childArr[0]
    const newTitleLabel = document.createElement('label')
    newTitleLabel.textContent = "New Title"
    const newDescription = document.createElement('input')
    newDescription.setAttribute('name','newDescription')
    newDescription.value = childArr[1]
    const newDescriptionLabel = document.createElement('label')
    newDescriptionLabel.textContent = "New Description"
    const newImg = document.createElement('input')
    newImg.setAttribute('name','newImg')
    newImg.value = childArr[2]
    const newImgLabel = document.createElement('label')
    newImgLabel.textContent = "New Image Url"
    const save = document.createElement('button')
    save.setAttribute('onclick',"update(event)")
    const cancel = document.createElement('button')
    cancel.setAttribute('onclick',"getList()")
    const hr = document.createElement('hr')
    updateForm.appendChild(newTitleLabel)
    updateForm.appendChild(newTitle)
    updateForm.appendChild(newDescriptionLabel)
    updateForm.appendChild(newDescription)
    updateForm.appendChild(newImgLabel)
    updateForm.appendChild(newImg)
    updateForm.appendChild(save)
    updateForm.appendChild(cancel)
    parent.appendChild(updateForm)
    parent.appendChild(hr)  
}

function update(event){
    const id = event.target.parentElement.parentElement.id
    let updateForm = event.target.parentElement
    let update ={}

    axios.put(`https://api.vschool.io/tonyeherrera/todo/${id}`,update)
        .then(response => getList())
        .catch(error => console.log(error))
}



getList()