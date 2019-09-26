import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({ poke }) => {
  // debugger
  return (
    <Link to='/pokemon/:pokemonId'>
      <li>
        {poke.name}
        <img style={{ width: "50px" }} src={poke.image_url}></img>
      </li>
    </Link>
  );
}
