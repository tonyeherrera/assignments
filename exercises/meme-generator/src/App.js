import React, { useEffect } from "react"
import Meme from "./Meme"
import SavedMemes from "./SavedMemes"
import axios from "axios"



export default function App(){

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    const [allMemeImages, setAllMemeImages] = React.useState([])

    useEffect(()=>{
        axios.get("https://api.imgflip.com/get_memes")
            .then(response => setAllMemeImages(response.data.data.memes))
            .catch(error => console.log(error))
    }, [])


    function getMemeImage(event){
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNum].url
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function saveMeme(event){
        const savedMeme = {
            image:meme.randomImage,
            topText:meme.topText,
            bottomText:meme.bottomText,
            id: crypto.randomUUID()
        }
        setMemesList(prevList => prevList ? [...prevList,savedMeme] : [savedMeme])
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                topText:"",
                bottomText:""
            }
        })
    }

    function edit(event){
        const id = event.target.parentElement.parentElement.parentElement.id
        const toBeEdited = memesList.filter(item => item.id === id)
        const {topText,bottomText,image} = toBeEdited[0]
        setMeme({
            topText:topText,
            bottomText:bottomText,
            randomImage:image
        })
    }

    function remove(event){
        const id = event.target.parentElement.parentElement.parentElement.id
        setMemesList(() => memesList.filter(item => item.id !== id))        
    }

    const [memesList, setMemesList] = React.useState([])

    useEffect(()=>{
        localStorage && setMemesList(JSON.parse(localStorage.getItem("memesList")))
    }, [])

    useEffect(() => {
        localStorage.setItem('memesList', JSON.stringify(memesList))
    }, [memesList])

    return(
        <div className="container">
            <div className="header">
                <h1>Meme Generator</h1>
            </div>
                <div className="inputsContainer">
                <input 
                    name="topText"
                    value={meme.topText}
                    placeholder="Top Text" 
                    onChange={handleChange} 
                    className="inputs"  
                />
                <input
                    name="bottomText"
                    value={meme.bottomText}
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    className="inputs"
                />
            </div>
            <div className="buttonsContainer">
                <button onClick={getMemeImage} className="buttons">Get New Meme</button>
                <button onClick={saveMeme}className="buttons">Save Meme</button>
            </div>
            
            <Meme 
                randomImage={meme.randomImage}
                topText={meme.topText}
                bottomText={meme.bottomText}
            />

            <hr/>

            {memesList && <SavedMemes 
                memesList= {memesList}
                edit={edit}
                remove={remove}
            />}

        </div>
    )
}