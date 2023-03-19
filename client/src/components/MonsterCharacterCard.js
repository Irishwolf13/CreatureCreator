import '../App.css';

function MonsterCharacterCard({ url, id, monsterName, handleMonsterDelete }) {

  const handleClicked = () => {
    fetch(`http://localhost:3000/monsters/${id}`, {
      method: 'DELETE'
    })
    .then(() => handleMonsterDelete(id))
  }

  return (
    <div>
      <div>Character Card</div>
      <div>Name: {monsterName}</div>
      <img className='monsterCard' src={url} alt="A scary monster" />
      <button onClick={handleClicked}>Delete</button>
    </div>
  );
}

export default MonsterCharacterCard;