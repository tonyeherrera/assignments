
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
        
        

        const h1 = document.createElement("h1")
        h1.textContent = data[i].title
       
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
        subDiv.setAttribute("id",data[i]._id)

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
            image.style.opacity = "50%"
        }else if (data[i].completed === false){
            checkbox.checked = false
            checkboxLabel.textContent = "Complete?"
        }
        // const deleteButton = document.createElement('button')
        // deleteButton.setAttribute()
        const line = document.createElement('hr')
        const remove = document.createElement('button')
        remove.setAttribute("onclick","remove(event)")
        remove.textContent = "Remove"



        newTodoDiv.setAttribute('class','todo-item')
        newTodoDiv.appendChild(h1)
        newTodoDiv.appendChild(h2)
        newTodoDiv.appendChild(image)
        subDiv.appendChild(h3)
        subDiv.appendChild(checkbox)
        subDiv.appendChild(checkboxLabel)
        subDiv.appendChild(remove)
        newTodoDiv.appendChild(subDiv)
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
    const id = event.target.parentElement.id
    let toggle = {}
    console.log(event.target.checked)
    if (event.target.checked === true){
        toggle = {completed: true}
    }else if (event.target.checked === false){
        toggle = {completed: false}
    }
        axios.put(`https://api.vschool.io/tonyeherrera/todo/${id}`, toggle)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    setTimeout(getList,50)
}

function remove(event){
    const id = event.target.parentElement.id
    console.log(id)
    axios.delete(`https://api.vschool.io/tonyeherrera/todo/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    setTimeout(getList,50)
   
}

getList()