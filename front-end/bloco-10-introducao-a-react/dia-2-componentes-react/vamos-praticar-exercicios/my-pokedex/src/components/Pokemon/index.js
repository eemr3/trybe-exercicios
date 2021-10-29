import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='card-pokemon'>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>
          {averageWeight.value}
          {averageWeight.measurementUnit}
        </p>
        <img src={image} alt={`Imagem do ${name}`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.string,
  image: PropTypes.string,
};

export default Pokemon;
