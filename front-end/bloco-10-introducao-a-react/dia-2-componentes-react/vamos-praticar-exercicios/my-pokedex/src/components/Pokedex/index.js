import React, { Component } from 'react';
import pokemons from '../../services/data';
import Pokemon from '../Pokemon';

import './pokedex.css';

class index extends Component {
  render() {
    return (
      <main className='container'>
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </main>
    );
  }
}

export default index;
