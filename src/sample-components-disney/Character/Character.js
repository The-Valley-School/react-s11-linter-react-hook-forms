import './Character.css';

const Character = (props) => {
  return (
    <div className='character' onClick={() => props.handleClick(props.character._id)}>
      <img className='character__image' src={props.character.imageUrl} alt={props.character.name} />
      <p className='character__name'>{props.character.name}</p>
    </div>
  );
};

export default Character;
