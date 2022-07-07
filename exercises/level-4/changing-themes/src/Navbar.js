import React ,{useContext} from "react"
import { ThemeContext } from "./ThemeContext"

export default function Navbar(){

    const {color} = useContext(ThemeContext)

    return(
        <div className="nav">
            <h1 className={`nav-${color}-clothed`}>{color === "isnt" ? "This thing could use a hat": "Aw man, this hat is messing up my hair"}</h1>
        </div>
    )
}