import React, {useContext, useState} from "react"
import {DataContext} from "./dataContext"
import BountyForm from "./BountyForm"


function BountyCard(props){

        const {completeBounty, submitEdit} = useContext(DataContext)
        const {firstName, lastName, living, bountyAmount, type, _id} = props
        const [editToggle, setEditToggle] = useState(false)

        function toggle(){
            setEditToggle(prevToggle => !prevToggle)
        }


        return(
            <div>
                { !editToggle ?
                <>
                    <div>
                        <h1>{firstName} {lastName}</h1>
                        <p>{type}</p>
                    </div>
                    <h3>Alive? {living ? "Yes": "No"}</h3>
                    <p>Bounty: ${bountyAmount}</p>
                    <button onClick={() => completeBounty(_id)}>Complete Bounty</button>
                    <button onClick={toggle}>Edit</button>
                </>
                :
                <>
                    <BountyForm {...props} submit={submitEdit} toggle={toggle} _id={_id} btnText="Submit Edit"/>
                    <button onClick={toggle}>X</button>
                </>
                }
             </div>
        )
}

export default BountyCard