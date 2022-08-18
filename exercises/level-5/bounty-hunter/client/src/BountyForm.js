import React, {useState} from "react"


function BountyForm(props){

  

    const init =  {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living ||  false,
        bountyAmount: props.bountyAmount || "",
        type: props.type || "default"
    }

    const [input, setInput] = useState(init)

    function handleChange(event){
        const {name, value, checked, type} = event.target
        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setInput(init)
        props.submit(input, props._id)
        props.toggle()
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name="firstName"
                    value={input.firstName}
                    onChange={handleChange}
                    placeholder="First Name"/>
                <input 
                    name="lastName"
                    value={input.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"/>
                <input 
                    name="living"
                    type="checkbox"
                    checked={input.living}
                    onChange={handleChange}/>
                 <label htmlFor="living">Are they alive?</label>
                <br />
                <br />
                <select
                    name="type" value={input.type} onChange={handleChange}>
                    <option value="default" disabled hidden>Jedi or Sith?</option>
                    <option value="Jedi">Jedi</option>
                    <option value="Sith">Sith</option>
                </select>
                <input 
                    name="bountyAmount"
                    type="number"
                    value={input.bountyAmount}
                    onChange={handleChange}
                    placeholder="Bounty"/>
                <button>{props.btnText}</button>
            </form>
        </div>
    )
}

export default BountyForm