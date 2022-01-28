import React from 'react';
import './AboutProject.css';

import MainTitle from '../MainTitle/MainTitle.js';

function AboutProject() {

    return (
        <div className="project__container page__content" id="AboutProject">
            <MainTitle buttonText={"О проекте"}/>
            <div className="project__info">
                <div className="project__column">
                    <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__column">
                    <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__scheme">
                <div className="project__scheme-chapter">
                    <div className="project__scheme-color-box project__scheme-color-box_type_back">
                        <p className="project__scheme-color-text project__scheme-color-text_type_back">1 неделя</p>
                    </div>
                    <p className="project__scheme-text">Back-end</p>
                </div>
                <div className="project__scheme-chapter">
                    <div className="project__scheme-color-box project__scheme-color-box_type_front">
                        <p className="project__scheme-color-text project__scheme-color-text_type_front">4 недели</p>
                    </div>
                    <p className="project__scheme-text">Front-end</p>
                </div>
            </div>
        </div>
    );
}

export default AboutProject;