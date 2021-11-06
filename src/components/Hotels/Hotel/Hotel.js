import React from 'react';
import img from '../../../assets/img/hotel.jpg'
import styles from './Hotel.module.css';

function Hotel () {
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
                                    <p className={styles.title}>Rooms to let</p>
                                    <span className="badge badge-light">city</span>  
                                </div>
                                <div className="col text-right">
                                    <p className={styles.scores}>Scoring: 0</p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className={styles.description}>description is here - lore ipsum of beach and swimming under the palms. All inclusive and so on, and so on</p>
                            <a href="#" className="btn btn-primary mt-2 px-5"> Show </a>
                        </div>

                    </div>
            </div>
        </div>
        
    )
}
export default Hotel;