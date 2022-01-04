import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container page__content">
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__content">
                    <p className="footer__date">&copy;2021</p>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <Link to="/" className="footer__list-link page__link" target="_blank">Яндекс.Практикум</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/" className="footer__list-link page__link" target="_blank">Github</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/" className="footer__list-link page__link" target="_blank">Facebook</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;