import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MonsterCharacterCard from './MonsterCharacterCard';

function ShowMonsters({ user, monsterState, setMonsterState }) {
  //allow navigation
  const navigate = useNavigate();
  const [myMonster, setMyMonster] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/monsters/${monsterState.user_id}`)
      .then(response => response.json())
      .then(data => setMyMonster(data));
  },[])


  const handleMonsterDelete = (id) => {
    setMyMonster(myMonster.filter(monster => monster.id !== id));
  };

  const viewMonsters = () => {
    return myMonster.map(monster => (
      <MonsterCharacterCard
        key={monster.id}
        url={monster.look.image}
        monsterName={monster.monster_name}
        id={monster.id}
        handleMonsterDelete={handleMonsterDelete}
      />
    ))
  };

// console.log(monsterState)
  return (
    <>
      <div>Show Monsters</div>
      <div>{viewMonsters()}</div>
    </>
  );
}

export default ShowMonsters;