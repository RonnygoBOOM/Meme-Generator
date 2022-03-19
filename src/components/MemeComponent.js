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

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Top text">
                
                </input>
                <input className="form--input" type="text" placeholder="Bottom text">
                
                </input>
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="result">
                <p>{meme.topText}</p>
                <img className="meme-image" src={meme.randomImage}></img>
                <p>{meme.bottomText}</p>
            </div>
        </main>
    )
}