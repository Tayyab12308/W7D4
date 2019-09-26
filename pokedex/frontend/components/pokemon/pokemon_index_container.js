import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index'
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from './../../reducers/selectors'

const mapStateToProps = ( state, ownProps ) => {
  // debugger;
  return {
    pokemon: selectAllPokemon(state.entities.pokemon)//state.entities.pokemon
  };
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    requestAllPokemon: () => dispatch(requestAllPokemon())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);