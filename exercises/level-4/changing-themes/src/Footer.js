import React ,{useContext} from "react"
import { ThemeContext } from "./ThemeContext"

export default function Footer(){

    const {color} = useContext(ThemeContext)

    return(
        <div className="footer">
            <h1 className={`footer-${color}-clothed`}>{color === "isnt" ? "This thing needs shoes.": "Thats better, now my toes are protected"}</h1>
        </div>
    )
}