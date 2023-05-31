import { useState, useRef, useEffect } from 'react';

import HeaderNavComponent from '../../components/header/headerNavComponent';
import { destinations } from '../../data/data.json';
import "./destination.css";
import { Outlet } from 'react-router-dom';


// mostrat imagenes dinamicas
// const showImage = require.context("../../assets/", true);

const Destination = () => {
    const [destination, setDestination] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [stateIndex, setStateIndex] = useState(0);
    const img = useRef();
    useEffect(() => {
        setDestination(destinations);
    }, [setDestination])

    const handleTab = (index) => {
        // img.current.style.opacity = 0;
        setActiveTab(index);
        setStateIndex(index);
    }
    return (
        <div className='container__destination'>
            <HeaderNavComponent />
            <Outlet />
            <section className='destination__main'>
                <div className='destination__main__text'>
                    <h4 className='destination__h4'><span className='destination__number'>01 </span>PICK YOUR DESTINATION</h4>
                </div>
                {
                    destination.length > 0 &&
                    (

                        <div className='destination__container'>
                            <div ref={img} className={`destination__images`}>
                                <figure ref={img} className={`destination__figure`}>
                                    <img src={destination[activeTab].images.png} loading='lazy' alt={destination[activeTab].name} className='destination__img' />
                                </figure>
                            </div>
                            <ul className='destination__ul'>
                                {
                                    destination.map((value, i) => (
                                        <li className={`destination__li ${activeTab === i ? 'destination__active remove-cursor' : ''}`} key={i} onClick={() => handleTab(i)}>
                                            {value.name}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='destination__list__text'>
                                <div className='destination__description__text'>
                                    <h2 className='destination__text__h2'>{destination[activeTab].name}</h2>
                                    <p className='destination__text__paragraph'>{destination[activeTab].description}</p>
                                    <hr style={{ width: '90%', margin: '8px 0 0' }} />
                                </div>
                                <div className='destination__text__distance'>
                                    <div className='destination__avg'>
                                        <h6 className='destination__h6'>AVG, Distance</h6>
                                        <p className='destination__avg__p'>
                                            {destination[activeTab].distance}
                                        </p>
                                    </div>
                                    <div className='destination__travel'>
                                        <h6 className='destination__h6'>EST. Travel Time</h6>
                                        <p className='destination__avg__p'>
                                            {destination[activeTab].travel}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    )
}
export default Destination