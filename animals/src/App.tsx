import './app.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';


function getRandomAnimal() {
  const animals = ["cat", "dog", "bird", "cow", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
  const [animals, setAnimals] = useState<string[]>([]);
  
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow animalType={animal} key={index}/>;
    });

  return (
    <div className="app">
      {/* <button onClick={() => console.log("Button was clicked.")}> */}
      <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
}

export default App;
