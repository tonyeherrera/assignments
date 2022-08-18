import React, {useContext} from "react"
import { DataContext } from "./dataContext"
import BountyCard from "./BountyCard"


function BountyList(){
const {bounties} = useContext(DataContext)

    return(
        <div>
            { bounties.map(bounty => { 
                return(
                    <BountyCard 
                        {...bounty} 
                        key= {bounty._id ? bounty._id : 1}
                    />
                )
            })}
        </div>
    )

}

export default BountyList