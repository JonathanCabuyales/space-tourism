

import { useState, useEffect } from "react";

import "./crew.css";
import { crew } from "../../data/data.json";
import circle from "../../assets/circle.svg";
import HeaderNavComponent from "../../components/header/headerNavComponent";

const Crew = () => {
    const [dataCrew, setdataCrew] = useState([]);
    const [imageActive, setImageActive] = useState(0);
    useEffect(() => {
        setdataCrew(crew);
    }, [setdataCrew])

    const handleImage = (e) => {
        setImageActive(e.target.tabIndex);
    }
    // console.log(crew[0].name)
    return (
        <div className="crew">
            <HeaderNavComponent />
            {
                dataCrew.length > 0 &&
                (
                    <section className="crew__container">
                        <div className="crew__title">
                            <h4 className="crew__h4"><span className="crew__number">02</span>Meet your crew</h4>
                        </div>
                        <div className="crew__container--grid">
                            <div className="crew__container__imgs">
                                <figure className="crew__figure">
                                    <img src={dataCrew[imageActive].images.png} alt={dataCrew[imageActive].name} className="crew__img" />
                                </figure>
                            </div>
                            <div className="crew__navigation__buttons">
                                {
                                    dataCrew.map((value, i) => (
                                        <div key={i} tabIndex={i} className={`crew__navigation__button ${imageActive == i ? 'crew__navigation__button__active' : ''}`} onClick={handleImage}></div>
                                    ))
                                }
                            </div>
                            <div className="crew__container__description">
                                <div className="crew__role__container">
                                    <h5 className="crew__role">
                                        {dataCrew[imageActive].role}
                                    </h5>
                                    <h2 className="crew__name">
                                        {dataCrew[imageActive].name}
                                    </h2>
                                </div>
                                <p className="crew_description">
                                    {dataCrew[imageActive].bio}
                                </p>
                            </div>
                        </div>
                    </section>
                )
            }
        </div>
    )
}


export default Crew;
