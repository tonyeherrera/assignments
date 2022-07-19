import React, {useState, useEffect} from "react"
import axios from "axios"


const DataContext = React.createContext()


function DataContextProvider(props){


    const initData = [{
    title:"",
    description:"",
    imgUrl:"",
    _id:""
    }]
    
    const [uglyData, setUglyData] = useState(initData)

    function getData(){
        axios.get(`https://api.vschool.io/tonyeherrera/thing`)
            .then(response => {
                setUglyData(response.data)
            })   
            .catch(error => console.log(error))
    }

    const [newPost, setNewPost] = useState({
        title:"",
        description:"",
        imgUrl:"",
        _id:""
    })

    function submit(){
        console.log(newPost)
        if(newPost._id !== ""){
            console.log(newPost._id)
            const id = newPost._id
            axios.put(`https://api.vschool.io/tonyeherrera/thing/${id}`, newPost)
            .then(response => getData())
            .catch(error => console.log(error))
        }else{
        axios.post(`https://api.vschool.io/tonyeherrera/thing`, {title:newPost.title,description:newPost.description,imgUrl:newPost.imgUrl})
            .then(response => getData())
            .catch(error => console.log(error))
        }
    }

    function remove(id){
        console.log(`https://api.vschool.io/tonyeherrera/thing/${id}`)
        axios.delete(`https://api.vschool.io/tonyeherrera/thing/${id}`)
            .then(response => getData())
            .catch(error => console.log(error))
    }

    function edit(id){
        axios.get(`https://api.vschool.io/tonyeherrera/thing/${id}`)
            .then(response => {
                setNewPost(response.data)
                console.log(response.data)
            })   
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        getData()
    },[])
    
    return(

        <DataContext.Provider value={{
           uglyData,
           getData,
           submit,
           newPost,
           setNewPost,
        //    itemId,
        //    setItemId,
           remove,
           edit
          
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContext, DataContextProvider }