import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

    return (
        <li className="card">
            <div className="card__info">
                <div className="card__text">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 47м</p>
                </div>
                <button className={props.typePageBtn ? `card__btn ${props.typePageBtn} page__button` : "card__btn"}
                        type="button"></button>
            </div>
            <img className="card__image" src={props.img} alt="название фильма"/>
        </li>
    );
}

export default MoviesCard;