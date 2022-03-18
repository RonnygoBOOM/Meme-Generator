import React from 'react';
import memesData from '../shared/memesData.js';


export default function Meme() {
    
    const [memeImage, setMemeImage] = React.useState("")
    const [topText, setTopText] = React.useState("")
    const [bottomText, setBottomText] = React.useState("")


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const url = memesArray[Math.floor(Math.random() * memesArray.length)].url
        setMemeImage(url)
    }

    function getTopText() {
        setTopText()
    }

    function getBottomText() {
        setBottomText()
    }

    return (
        <main>
            <div className="form">
                <input onChange={getTopText} className="form--input" type="text" placeholder="Top text">
                
                </input>
                <input onChange={getBottomText} className="form--input" type="text" placeholder="Bottom text">
                
                </input>
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="result">
                <p>{topText}</p>
                <img className="meme-image" src={memeImage}></img>
                <p>{bottomText}</p>
            </div>
        </main>
    )
}