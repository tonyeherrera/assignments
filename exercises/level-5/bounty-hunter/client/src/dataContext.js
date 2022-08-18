import React, {useState, useEffect} from "react"
import axios from "axios"

const DataContext = React.createContext()

function DataContextProvider(props){
    
    const [bounties, setBounties] = useState([])

    function getBounties(){
        axios.get("/bounty")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
       getBounties()
    }, [])

    function addBounty(body){
        axios.post("/bounty",body)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
                getBounties()})
            .catch(err => console.log(err))
    }

    function completeBounty(bountyId){
        axios.delete(`/bounty/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    function submitEdit(update, bountyId){
        axios.put(`/bounty/${bountyId}`, update)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(res => console.log(res))
    }



    return(
        <DataContext.Provider value={{
            bounties,
            addBounty,
            completeBounty,
            submitEdit
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContextProvider, DataContext}