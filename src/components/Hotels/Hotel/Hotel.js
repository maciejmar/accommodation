import PropTypes from 'prop-types';
import React from 'react';

import img from '../../../assets/img/hotel.jpg'
import styles from './Hotel.module.css';

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
function Hotel (props) {
    return (
        <div className={`card ${styles.hotel}`}>
            <div className="card-body">
        
                    <div className={`row ${styles.hotel}`}>
                        <div className="col-4" >
                        <img src={img}
                            alt =''
                            className='img-fluid img thumbnail'/>
                        </div>
                        
                        <div className='col-8'>
                            <div className='row'>
                                <div className="col">
                                    <p className={styles.title}>{props.name}</p>
                                    <span className="badge badge-light">{props.city}</span>  
                                </div>
                                <div className="col text-right">
                                    <p className={styles.scores}>{props.rating}</p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className={styles.description}>{props.description}</p>
                            <a href="#" className={`btn btn-${props.theme} mt-2 px-5`}> Show </a>
                        </div>

                    </div>
            </div>
        </div>
        
    )
}
Hotel.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
Hotel.propTypes = propTypes;
export default Hotel;