import React, { useEffect, useState } from 'react';
import axios from 'axios'
import TinderCard from 'react-tinder-card';
import './Cards.css'

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:5000/api/v1/cards");
  
      setPeople(req.data)
    }
    fetchData();
  }, []);
  
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };


  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.image})` }}
              className="card"
            >
              <h3>{person.name}</h3>
              <h2>Age: {person.age}</h2>
        
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}


export default Cards
