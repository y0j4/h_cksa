import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experiencia</h3>
            <span className="about__title">+ 6 años</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Proyectos</h3>
            <span className="about__title">+50 completos</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Atención</h3>
            <span className="about__title">Online 24/7</span>
        </div>
    </div>
    
  )
}

export default Info