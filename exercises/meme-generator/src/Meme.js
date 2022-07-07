import React from "react"

export default function UserMeme(props){
    return(
        <div className="meme">
            <img src={props.randomImage} alt="" className="meme--image"/>
            <h1 className="meme--text top">{props.topText}</h1>
            <h2 className="meme--text bottom">{props.bottomText}</h2>
        </div>
    )
}