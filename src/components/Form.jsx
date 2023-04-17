import { useState } from "react"
import { Meme } from "../memeData"
export const Form=()=>{
    const [allMemesImages,setAllMemesImages]=useState(Meme)
    const  [memeImage,setMemeImage]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1g8my4.jpg"
    })
    const randomMeme=()=>{
        const memesArray=Meme.data.memes
        const randomNumber=Math.floor(Math.random()* memesArray.length)
        const url=memesArray[randomNumber].url
      setMemeImage((prevState)=>{
        return {...prevState, randomImage:url}
      })
      console.log(memeImage);
    }
   
    return(
        <main>
            <div className="form">
                <input type="text"  placeholder="input one" className="input"/>
                <input type="text"  placeholder="input two" className="input"/>
                <button className="submit" onClick={randomMeme}>Get a new meme image 🖼️</button>
                {memeImage &&  <img src={memeImage.randomImage} alt=" meme image" className="memeImage" />}
            </div>
        </main>
    )
}
