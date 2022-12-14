import React from 'react';
import { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Servicios</h2>
        <span className="section__subtitle">Qué es lo que ofrecemos</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-palette services__icon"></i>
                    <h3 className="services__title">Diseño gráfico</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>Amplia la info<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Diseño gráfico</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam veritatis esse explicabo unde vero, corporis alias recusandae, itaque ducimus quam veniam expedita quia incidunt placeat minus facere. Asperiores, culpa quia.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="services__content">
                <div>
                    <i className="uil uil-video services__icon"></i>
                    <h3 className="services__title">Edición de video y motion graphics</h3>
                </div>
                <span onClick={() => toggleTab(2)} className="services__button">Amplia la info<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Edición de video y motion graphics</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam veritatis esse explicabo unde vero, corporis alias recusandae, itaque ducimus quam veniam expedita quia incidunt placeat minus facere. Asperiores, culpa quia.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="bx bxs-t-shirt services__icon"></i>
                    <h3 className="services__title">Diseño textil</h3>
                </div>
                <span  onClick={() => toggleTab(3)} className="services__button">Amplia la info<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Diseño textil</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam veritatis esse explicabo unde vero, corporis alias recusandae, itaque ducimus quam veniam expedita quia incidunt placeat minus facere. Asperiores, culpa quia.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services