import React from "react"

export default function Display(props){
    const {color1, color2, angle} = props.gradient
    const userGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`
    console.log(userGradient)
    return(
        <div className="displayContainer">
                <div className="gradientDisplay" style={{background:`${userGradient}`}}>
                </div>
                <div className="codeContainer">
                    <p>background: {userGradient}</p>
                    <p>-moz-background: {userGradient}</p>
                    <p>-webkit: {userGradient}</p>
                </div>
        </div>
    )
}