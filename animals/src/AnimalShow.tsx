import './AnimalShow.css';
import {useState} from 'react';
import cat from './svg/cat.svg'
import dog from './svg/dog.svg'
import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg' 
import heart from './svg/heart.svg'

const svgMap = {
    cat,
    dog,
    bird,
    cow,
    gator,horse,
    heart
}

interface AnimalProps {
    animalType: string;
}

function AnimalShow({animalType}: AnimalProps) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };
    
    return (
        <div className="animal-show" onClick={handleClick}>
          <img className='animal' src={svgMap[animalType]} alt="animal"/>
          <img
            className='heart'
            src={heart}
            alt="heart"
            style={{width: 10 + 10*clicks + 'px' }}
          />
        </div>
    )
}

export default AnimalShow;
