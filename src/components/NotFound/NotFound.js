import React from 'react';
import {useHistory} from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    const history = useHistory();

    return (
        <main className="content">
            <section className="not-found page__content">
                <p className="not-found__code">404</p>
                <p className="not-found__text">Страница не найдена</p>
                <button className="not-found__button page__button" onClick={() => history.goBack()}>Назад</button>
            </section>
        </main>
    );
}

export default NotFound;