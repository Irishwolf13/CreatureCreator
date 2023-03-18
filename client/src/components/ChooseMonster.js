import React, { useState, useEffect } from 'react';
import MonsterImageCard from './MonsterImageCard.js'
import { useNavigate } from 'react-router-dom';

function ChooseMonster({user, setMonsterState, monsterState, monsters}) {

  const [filterName, setFilterName] = useState('');
 console.log(monsterState)
  //allow navigation
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setMonsterState(prevState => ({ ...prevState, user: user.id }));
    navigate('/create/monster')
  }

  const handleClick = (lookID) => {
    setMonsterState(prevState => ({ ...prevState, look_id: lookID}));
  }

  const viewMonsters = () => {
    return monsters.filter(monster => monster.race.includes(filterName)).map(monster => (
      <MonsterImageCard
        key={monster.id}
        url={monster.image}
        id={monster.id}
        onClick={() => handleClick(monster.id)}
        selected={monsterState.selectedButton === monster.id}
      />
    ))
  };

  return (
    <>
      <div>Create Monsters</div>
      <form onSubmit={handleSubmit}>
        <label>
          Creature Name:
          <input type="text" value={monsterState.monster_name} onChange={(e) => setMonsterState(prevState => ({ ...prevState, monster_name: e.target.value }))} />
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