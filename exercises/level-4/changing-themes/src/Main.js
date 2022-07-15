import React ,{useContext} from "react"
import { ThemeContext } from "./ThemeContext"

export default function Main(){

    const {color, toggleTheme} = useContext(ThemeContext)

    return(
        <div className={`main-${color}-clothed`}>
            <h1>{color === "isnt" ? "This is between the head and foot so I guess you could add a shirt":"I said a shirt, not a jacket. Now its too hot!"}</h1>
            <button onClick={toggleTheme}>{color === "isnt" ? "Put some cloths on": "its too hot, lets take some of this off"}</button>
        </div>
    )
}