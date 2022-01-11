import React from 'react';
import {Link} from "react-router-dom";
import './NotFound.css';

function NotFound() {

    return (
        <main className="content">
            <section className="not-found page__content">
                <p className="not-found__code">404</p>
                <p className="not-found__text">Страница не найдена</p>
                <Link to="/" className="not-found__link page__link">Назад</Link>
            </section>
        </main>
    );
}

export default NotFound;