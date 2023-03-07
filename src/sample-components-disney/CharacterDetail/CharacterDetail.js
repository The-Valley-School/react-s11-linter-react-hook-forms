import React from 'react';
import './CharacterDetail.css';

const CharacterDetail = (props) => {
  return (
    <div className='character-detail' onClick={() => props.handleClick(null)}>
      <div className='character-detail__info'>

        <h1 className='character-detail__title'>{props.character.name}</h1>
        <img alt={props.character.name} src={props.character.imageUrl} />
        {props.character.allies?.length > 0 && <p><strong>Aliados:</strong> {props.character.allies.map((ally) => <span key={ally}>{ally}, </span>)}</p>}
        {props.character.enemies?.length > 0 && <p><strong>Enemigos:</strong> {props.character.enemies.map((enemy) => <span key={enemy}>{enemy}, </span>)}</p>}
        {props.character.films?.length > 0 && <p><strong>Películas:</strong> {props.character.films.map((film) => <span key={film}>{film}, </span>)}</p>}
        {props.character.parkAttractions?.length > 0 && <p><strong>Atracciones:</strong> {props.character.parkAttractions.map((attr) => <span key={attr}>{attr}, </span>)}</p>}
        {props.character.shortFilms?.length > 0 && <p><strong>Cortos:</strong> {props.character.shortFilms.map((short) => <span key={short}>{short}, </span>)}</p>}
        {props.character.tvShows?.length > 0 && <p><strong>Series de TV:</strong> {props.character.tvShows.map((tvShow) => <span key={tvShow}>{tvShow}, </span>)}</p>}
        {props.character.videoGames?.length > 0 && <p><strong>Videojuegos:</strong> {props.character.videoGames.map((game) => <span key={game}>{game}, </span>)}</p>}

      </div>
    </div>
  );
}

export default CharacterDetail;
