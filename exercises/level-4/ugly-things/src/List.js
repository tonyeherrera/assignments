import React, {useContext} from "react"
import {DataContext} from "./dataContext"


function List(props){

 
    const {uglyData, remove, edit} = useContext(DataContext)
     
    function handleClick(event){
        if(event.target.textContent === "Remove"){
            remove(event.target.parentElement.id)
        }else if(event.target.textContent === "Edit"){
            edit(event.target.parentElement.id)
        }
    }
    

    const listed = uglyData.map(item => {
        const {title, description, imgUrl, _id} = item
        const key = _id ? _id : uglyData.indexOf(item)
        return(
            <div key={key} id={key}>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <button onClick={handleClick}>Remove</button>
                <button onClick={handleClick}>Edit</button>
                <img src={imgUrl} width="200px" height="100px" alt=""></img>
            </div>

        )})

    return(
        <>
           {listed}
        </>
    )
}

export default List