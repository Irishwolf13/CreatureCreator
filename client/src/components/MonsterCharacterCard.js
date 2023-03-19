import '../App.css';

function MonsterCharacterCard({id, url, level, monsterName, HP, MP, attack, armor_type, armor_image, weapon_image, movement, bio, handleMonsterDelete }) {

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
      <img className='smallImage' src={armor_image} alt="armor"/>
      <img className='smallImage' src={weapon_image} alt="armor"/>
      <img className='monsterCardBoarder' src='/card1.png'/>
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