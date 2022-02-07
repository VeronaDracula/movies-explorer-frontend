import React from 'react';
import './AboutMe.css';

import studentPhoto from '../../images/owl.jpg';

import MainTitle from '../MainTitle/MainTitle.js';

function AboutMe() {

    return (
        <div className="about__container page__content">
            <MainTitle buttonText={"Студент"}/>
            <div className="about__data">
                <div className="about__data-text">
                    <h3 className="about__data-text-title">Екатерина</h3>
                    <p className="about__data-text-subtitle">Фронтенд-разработчик, 27 лет</p>
                    <p className="about__data-text-info">
                        Я живу в Санкт-Петербурге, закончила факультет химии веществ и материалов в СпбГТИ(ТУ).
                        Люблю читать фэнтези, играть в компьютерные игры и иногда собирать паззлы.
                        Примерно полтора года назад начала кодить. После того, как прошла курс по веб-разработке,
                        активно ищу работу по новой специальности.
                    </p>
                    <ul className="about__data-contacts">
                        <li className="about__data-contacts-item">
                            <a href="https://www.facebook.com/ekaterina.zenkova.1" className="about__data-contacts-link page__link"
                               target="_blank" rel="noreferrer">Facebook</a>
                        </li>
                        <li className="about__data-contacts-item">
                            <a href="https://github.com/VeronaDracula" className="about__data-contacts-link page__link"
                               target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
                <img className="about__student-data-img" src={studentPhoto} alt="фото студента"/>
            </div>
            <div className="about__portfolio">
                <h4 className="about__portfolio-title">Портфолио</h4>
                <ul className="about__portfolio-list">
                    <li className="about__portfolio-list-item">
                        <a href="https://veronadracula.github.io/how-to-learn/" className="about__portfolio-list-link page__link"
                           target="_blank" rel="noreferrer">
                            Статичный сайт
                            <div className="about__portfolio-list-icon"></div>
                        </a>
                    </li>
                    <li className="about__portfolio-list-item">
                        <a href="https://veronadracula.github.io/russian-travel/" className="about__portfolio-list-link page__link"
                           target="_blank" rel="noreferrer">
                            Адаптивный сайт
                            <div className="about__portfolio-list-icon"></div>
                        </a>
                    </li>
                    <li className="about__portfolio-list-item">
                        <a href="https://mesto.practicum.nomoredomains.rocks" className="about__portfolio-list-link page__link"
                           target="_blank" rel="noreferrer">
                            Одностраничное приложение
                            <div className="about__portfolio-list-icon"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;