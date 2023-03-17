import '../App.css';

function MonsterImageCard({ url, id, onClick, selected }) {
  return (
    <div>
      <button className={`lookButton ${selected && "selected"}`} onClick={onClick}>
        <img className='monsterCard' src={url} alt="A scary monster" />
      </button>
    </div>
  );
}

export default MonsterImageCard;