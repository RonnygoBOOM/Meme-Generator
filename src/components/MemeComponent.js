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
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(apiData => setAllMemes(apiData.data.memes))
        
        }, [])

        function getMemeImage() {
            const randomNumber = Math.floor(Math.random() * allMemes.length)
            const url = allMemes[randomNumber].url
            console.log(url)
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            }))
            
        }


    function handleText(event) {
        setMeme(prev => {
            return {
            ...prev,
            [event.target.name]: event.target.value}
        })
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" name="topText" type="text" onChange={handleText} placeholder="Top text">
                
                </input>
                <input className="form--input" name="bottomText" type="text" onChange={handleText} placeholder="Bottom text">
                
                </input>
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}