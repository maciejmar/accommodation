import React from 'react';
import img from '../../../assets/img/hotel.jpg'
import styles from './Hotel.module.css';

function Hotel () {
    return (
        <div className="card">
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
                                    <p>Title</p>
                                    <p>city</p>  
                                </div>
                                <div className="col">
                                    <p>Scoring</p>
                                    <p>Opinons</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <p>description is here - lore ipsum of beach and swimming under the palms. All inclusive and so on, and so on</p>
                            <a href="#" className="btn btn-primary"> Show </a>
                        </div>
                        
                    </div>
            </div>
        </div>
        
    )
}
export default Hotel;