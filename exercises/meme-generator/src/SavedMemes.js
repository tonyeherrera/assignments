import React from "react"

export default function SavedMemes(props){
    return props.memesList.map(item => {
        const {image,topText,bottomText,id} = item
        return(
            <div style={{backgroundImage: `url(${image})`,backgroundSize:"cover",width:"250px", height:"200px"}} key={id} id={id}>
                <div>
                    <button onClick={props.edit}><img src="https://th.bing.com/th/id/R.5ab6cb6c93c92ac2d76f56bf90e58315?rik=FkUs9MTEBdT72w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_397968.png&ehk=ohARLVU5ftC7WHFObJLcLDILFPg4Yt7CsfzB%2bgx%2fjSM%3d&risl=&pid=ImgRaw&r=0" style={{width:"20px", backgroundColor:"tranparent"}}/></button>
                    <button onClick={props.remove}><img src="https://th.bing.com/th/id/R.6e23dc6bed77df9fd92b8f0fa60c4ce2?rik=KZP9SOTut%2bmqeg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_370159.png&ehk=KNotNsMIHKQ%2fQ5t5Ilw7gz8CSms3rqb8L9PumOOTyAo%3d&risl=&pid=ImgRaw&r=0" style={{width:"20px", backgroundColor:"tranparent"}}/></button>
                </div>
                <h4>{topText}</h4>
                <h4>{bottomText}</h4>
            </div>
        )
    }) 
}