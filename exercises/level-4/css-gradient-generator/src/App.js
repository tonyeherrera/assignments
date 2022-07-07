import React, {useState} from "react"
import Form from "./Form"
import Display from "./Display"

export default function App(){
    const [gradient, setGradient] = useState({color1:"",color2:"",angle:""})
    

    return  (
        <div className="mainContainer">
           <Display gradient={gradient}/>
           <Form setGradient={setGradient} />
        </div>
    )
}