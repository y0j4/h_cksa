import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">Sobre nosotros</h2>
        <span className="section__subtitle">Historia</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="Imagen representativa sobre el equipo" className="about__img" />

          <div className="about__data">
            <Info />

            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in suscipit saepe cum pariatur! Suscipit quasi, cumque exercitationem perferendis perspiciatis odit? Molestias eos nisi maxime aliquid commodi atque porro delectus?
            </p>
          </div>
        </div>
    </section>
  )
}

export default About