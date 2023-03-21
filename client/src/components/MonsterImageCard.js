import '../App.css';

function MonsterImageCard({ url, id, onClick, selected, race }) {
  return (
    <div>
      <button className={`lookButton ${selected && "selected"}`} onClick={onClick}>
        <img className='createMonsterCard' src={url} alt="A scary monster" />
      </button>
      <div>{race}</div>
      <br></br>
    </div>
  );
}

export default MonsterImageCard;