import React from "react"
// import {DataContext} from "./dataContext"

const initData = {
    title:"",
    description:"",
    imgUrl:"",
    id:""
  }

function Form(){

    const [userInput, setUserInput] = useState({initData})
    const {title, description, imageUrl} = userInput

    function handleChange(event){
        const {name, value} = event.target
        setUserInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }
 
    return(
        <div>
            <form>
                <input 
                    placeholder="Image URL"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Why is this ugly?"
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <h1>dumb</h1>
        </div>

    )
}

export default Form