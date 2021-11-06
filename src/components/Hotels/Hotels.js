import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

const propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
}

class Hotels extends Component {
  render ()
  {
      return (
    <div className={styles.container}>
        <h2 className= {styles.title}>Oferts:</h2>
        {this.props.hotels.map(hotel =>  <Hotel key = {hotel.id} {...hotel}  /> )}   
        
    </div>
  )
  }
}

Hotels.propTypes = propTypes;

export default Hotels;