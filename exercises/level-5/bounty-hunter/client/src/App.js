import React, { useContext} from "react"
import {DataContext} from "./dataContext"
import BountyList from "./BountyList"
import BountyForm from "./BountyForm"


function App(){
 
    const {addBounty} = useContext(DataContext)

    return(
        <>
            <BountyForm submit={addBounty} btnText="Add Bounty"/>
            <hr/>
            <BountyList />
        </>
    )
}

export default App