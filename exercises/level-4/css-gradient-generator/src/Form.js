import React, {useState} from "react"

export default function Form(props){
    const [userInput, setUserInput] = useState({color1:"#000000", color2:"#000000", angle:""})

    function handleChange(event){
        const {name, value} = event.target
        setUserInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
        console.log(userInput)
    }

    function handleSubmit(event){
        event.preventDefault()
        props.setGradient(userInput)
    }

    
    return (
        <div className="formContainer">
            <form>
                <span className="inputs">
                    <label>Color 1</label>
                    <p>{userInput.color1}</p>
                    <input type="color" onChange={handleChange} name="color1" value={userInput.color1} label="Color 1" style={{width:"58px"}}/>  
                </span>
                <span className="inputs">
                    <label>Color 2</label>
                    <p>{userInput.color2}</p>              
                    <input type="color" onChange={handleChange} name="color2" value={userInput.color2} label="Color 2" style={{width:"58px"}}/>
                </span>
                <span className="inputs">
                    <label>Angle</label>
                    <input type="number" onChange={handleChange} name="angle" value={userInput.angle} maxLength={3} id="angle"/>
                </span>
                <button onClick={handleSubmit} id="submit">Submit</button>
            </form>
        </div>
    )
}