
import { useState, useEffect } from 'react';

import HeaderNavComponent from '../../components/header/headerNavComponent';
import './tech.css';
import { technology } from '../../data/data.json';

const Index = () => {

    const [dataTech, setDataTech] = useState([]);
    const [imageActive, setImageActive] = useState(0)
    const [imageSide, setImageSide] = useState(0);



    useEffect(() => {
        setDataTech(technology)
    }, [setDataTech]);
    useEffect(() => {
        setImageSide(window.innerWidth);
    }, [setImageSide]);
    const handleImage = (e) => {
        setImageActive(e.target.tabIndex);
    }
    return (
        dataTech.length > 0 &&
        (

            <div className='tech'>
                <HeaderNavComponent />
                <section className='tech__container'>
                    <div className='tech__title'>
                        <h4 className='tech__title--h4'><span className='tech__title--number'>03 </span> Space launch 101</h4>
                    </div>
                    <div className='tech__main'>
                        <figure className='tech__container__figure'>
                            <img src={(imageSide > 1125) ? dataTech[imageActive].images.portrait : dataTech[imageActive].images.landscape} alt={dataTech[imageActive].name} className='tech__container__img' />
                        </figure>
                        <div className='tech__nav__buttons'>
                            {
                                dataTech.map((value, i) => (
                                    <div tabIndex={i} key={i} className={`tech__nav__button ${imageActive == i ? 'tech__nav__button--active' : ''}`} onClick={handleImage}>
                                        {i + 1}
                                    </div>
                                ))
                            }
                        </div>
                        <div className='tech__main__decription'>
                            <div className='tech__description__title'>
                                <h3 className='tech__h3'>The terminology...</h3>
                                <h2 className='tech__subtitle'>{dataTech[imageActive].name}</h2>
                            </div>
                            <p className='tech__main__paragraph'>
                                {dataTech[imageActive].description}
                            </p>

                        </div>
                    </div>
                </section>
            </div>
        )
    )
}

export default Index;
