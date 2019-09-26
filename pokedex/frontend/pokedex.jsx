import React from 'react';
import ReactDOM from 'react-dom';
// import { fetchAllPokemon, receiveAllPokemon } from './actions/pokemon_actions';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store'
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
