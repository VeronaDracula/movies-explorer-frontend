import React from 'react';
import {Link} from "react-router-dom";

import studentPhoto from '../../images/student-photo.jpg';

import MainTitle from '../MainTitle/MainTitle.js';

function AboutMe() {

    return (
        <div className="about__container page__content">
            <MainTitle buttonText={"Студент"}/>
            <div className="about__data">
                <div className="about__data-text">
                    <h3 className="about__data-text-title">Виталий</h3>
                    <p className="about__data-text-subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="about__data-text-info">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
                        работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
                        заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <ul className="about__data-contacts">
                        <li className="about__data-contacts-item"><Link to="/" className="about__data-contacts-link page__link">Facebook</Link></li>
                        <li className="about__data-contacts-item"><Link to="/" className="about__data-contacts-link page__link">Github</Link></li>
                    </ul>

                </div>
                <img className="about__student-data-img" src={studentPhoto} alt="фото студента"/>
            </div>
            <div className="about__portfolio">
                <h4 className="about__portfolio-title">Портфолио</h4>
                <ul className="about__portfolio-list">
                    <li className="about__portfolio-list-item">
                        <Link to="/" className="about__portfolio-list-link page__link" target="_blank">
                            Статичный сайт
                            <div className="about__portfolio-list-icon"></div>
                        </Link>
                    </li>
                    <li className="about__portfolio-list-item">
                        <Link to="https://veronadracula.github.io/russian-travel/" className="about__portfolio-list-link page__link" target="_blank">
                            Адаптивный сайт
                            <div className="about__portfolio-list-icon"></div>
                        </Link>
                    </li>
                    <li className="about__portfolio-list-item">
                        <Link to="/" className="about__portfolio-list-link page__link" target="_blank">
                            Одностраничное приложение
                            <div className="about__portfolio-list-icon"></div>
                        </Link>
                    </li>
                </ul>




            </div>


        </div>
    );
}

export default AboutMe;