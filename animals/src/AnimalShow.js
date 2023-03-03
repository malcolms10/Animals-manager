import "./css/AnimalShow.css";
import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import horse from "./svg/horse.svg"
import cow from "./svg/cow.svg"
import heart from "./svg/heart.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"

import { useState } from "react"


const svgMap = {
    bird,cow,horse,cat,gator,dog
}

export default function AnimalShow({type}) {

    const [clickes,setClickes] = useState(0)

    const handleClick = () => { 
        setClickes(clickes + 1)
    }

    return(
        <div onClick={handleClick} className="animal-show">
            <img className="animal" alt="animal" src={svgMap[type]}/>
            <img className="heart" alt="heart" src={heart} style={{width: 10 + 10 * clickes}}/>
        </div>
    )
}