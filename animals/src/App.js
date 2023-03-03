import { useState } from "react"
import AnimalShow from "./AnimalShow"
import "./css/App.css"

export default function App(params) {

    const [animal,setAnimals] = useState([]) 
    
    function getRandomAnimal(){

        const animals = ["cow","dog","gator", "bird", "cat", "horse"]

        return animals[Math.floor(Math.random()* animals.length)]
    }   

    const handleClick = () => {
        setAnimals([...animal,getRandomAnimal()])

    }

    const rerenderAnimals = animal.map((animal,index) => {
        return <AnimalShow type={animal} key={index} />
    }) 
    
    return(
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{rerenderAnimals}</div>
        </div>
    )
}