import React from 'react';
import memesData from '../shared/memesData.js';


export default function Meme() {
    
    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
        allMemeImages: memesData
    })


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const url = memesArray[Math.floor(Math.random() * memesArray.length)].url
        setMeme(prevMeme =>
            {
                return {
                    ...prevMeme,
                    randomImage: url
                }
            })
    }

    function handleTopText(event) {
        setMeme(prev => {
            return {...prev,
            topText: event.target.value}
        })
    }

    function handleBottomText(event) {
        setMeme(prev => {
            return {
            ...prev,
            bottomText: event.target.value}
        })
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" onChange={handleTopText} placeholder="Top text">
                
                </input>
                <input className="form--input" type="text" onChange={handleBottomText} placeholder="Bottom text">
                
                </input>
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="result">
                <p classname="top-text">{meme.topText}</p>
                <img className="meme-image" src={meme.randomImage}></img>
                <p className="bottom-text">{meme.bottomText}</p>
            </div>
        </main>
    )
}