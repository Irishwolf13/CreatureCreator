import React, { useState, useEffect } from 'react';
import MonsterImageCard from './MonsterImageCard.js'
import { useNavigate } from 'react-router-dom';

function ChooseMonster() {
  const [creatureName, setCreatureName] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [selectedButton, setSelectedButton] = useState("");
  
  //allow navigation
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted creature name:', creatureName);
    navigate('/create/monster')
  }

  useEffect(() => {
    fetch('http://localhost:3000/looks')
      .then(response => response.json())
      .then(data => setMonsters(data));
  }, []);

  const handleClick = (lookID) => {
    console.log(lookID)
    setSelectedButton(lookID);
  }

  const viewMonsters = () => {
    return monsters.filter(monster => monster.race.includes(filterName)).map(monster => (
      <MonsterImageCard
        key={monster.id}
        url={monster.image}
        id={monster.id}
        onClick={() => handleClick(monster.id)}
        selected={selectedButton === monster.id}
      />
    ))
  };

  return (
    <>
      <div>Create Monsters</div>
      <form onSubmit={handleSubmit}>
        <label>
          Creature Name:
          <input type="text" value={creatureName} onChange={(e) => setCreatureName(e.target.value)} />
        </label>
        <button type="submit">Create Monster</button>
      </form>
      <label>
        Filter by Name:
        <input type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
      </label>
      <div className='looks'>
        {viewMonsters()}
      </div>
    </>
  );
}

export default ChooseMonster;