import '../App.css';

function MonsterCharacterCard({id, url, level, monsterName, HP, MP, attack, armor_type, movement, bio, handleMonsterDelete }) {

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
      <div>
        <>Level: {level} </>
        <>HitPoints: {HP} </>
        <>MagicPoints: {MP} </>
        <>Attack Rating: {attack} </>
        <>Armor type: {armor_type}</>
      </div>
      <div>{bio}</div>
      <button onClick={handleClicked}>Delete</button>
    </div>
  );
}

export default MonsterCharacterCard;