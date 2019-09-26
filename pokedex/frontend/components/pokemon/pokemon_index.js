import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    // debugger;
    this.props.requestAllPokemon();
  }

  render() {
    // debugger
    const { pokemon } = this.props;
    const pokemonList = pokemon.map((poke) => {
      return <PokemonIndexItem key={poke.id} poke={poke} />
    });
    return (
      <>
        <h1>Pokemon Index</h1>
        <ul>{pokemonList}</ul>
      </>
    );
  }
}

export default PokemonIndex;