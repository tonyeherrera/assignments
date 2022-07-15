import React, { useState, useEffect } from "react"
import axios from "axios"


const DataContext = React.createContext()
const initData = {
    title:"",
    description:"",
    imgUrl:"",
    id:""
}

function DataContextProvider(props){

    const [uglyData, setUglyData] = useState({initData})

    useEffect(()=>{
        axios.get(`https://api.vschool.io/tonyeherrera/thing`)
            .then(response => {
                console.log('respones', response.data)
                setUglyData("get success")
                // setUglyData(response.data)
            })   
            .catch(error => console.log(error))
        
    },[])

    

    return(
        <DataContextProvider value={{
            uglyData:uglyData
        }}>
            {props.children}
        </DataContextProvider>
    )
}

export {DataContext, DataContextProvider }