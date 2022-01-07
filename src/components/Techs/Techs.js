import React from 'react';

import MainTitle from '../MainTitle/MainTitle.js';

function Techs() {

    return (
        <div className="technologies__container page__content">
            <MainTitle buttonText={"Технологии"} technologies="Технологии"/>
            <div className="technologies__content">
                <h3 className="technologies__title">7 технологий</h3>
                <p className="technologies__subtitle">На курсе веб-разработки мы освоили технологии,
                    которые применили в дипломном проекте.
                </p>
                <ul className="technologies__list">
                    <li className="technologies__list-item">HTML</li>
                    <li className="technologies__list-item">CSS</li>
                    <li className="technologies__list-item">JS</li>
                    <li className="technologies__list-item">React</li>
                    <li className="technologies__list-item">Git</li>
                    <li className="technologies__list-item">Express.js</li>
                    <li className="technologies__list-item">mongoDB</li>
                </ul>
            </div>
        </div>
    );
}

export default Techs;