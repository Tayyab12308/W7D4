import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import helloReducer from './hello_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  hello: helloReducer,
})

export default entitiesReducer;