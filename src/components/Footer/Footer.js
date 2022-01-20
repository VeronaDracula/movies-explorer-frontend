import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container page__content">
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__content">
                    <p className="footer__date">&copy;2021</p>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a href="https://practicum.yandex.ru/web/"
                               className="footer__list-link page__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="https://github.com/VeronaDracula"
                               className="footer__list-link page__link" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="https://www.facebook.com/ekaterina.zenkova.1"
                               className="footer__list-link page__link" target="_blank" rel="noreferrer">Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;