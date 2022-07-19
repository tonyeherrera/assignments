import React, {useState, useContext} from "react"
import {DataContext} from "./dataContext"

const initData = {
    title:"",
    description:"",
    imgUrl:"",
    id:""
  }

function Form(){

    const {submit, newPost, setNewPost} = useContext(DataContext)
    const {title, description, imgUrl} = newPost

    function handleChange(event){
        const {name, value} = event.target
        setNewPost(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })      
    }

    function handleSubmit(event){
        event.preventDefault()
        submit()
        setNewPost(initData)
    }
    
 
    return(
        <div>
            <form>
                <input 
                    placeholder="Image URL"
                    name="imgUrl"
                    value={imgUrl}
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
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <img src={imgUrl} alt="Your image will display here" width="400px" height="200px" ></img>
            <hr></hr>
        </div>

    )
}

export default Form