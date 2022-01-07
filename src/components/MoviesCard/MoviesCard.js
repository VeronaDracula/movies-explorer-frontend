import React from 'react';

function MoviesCard(props) {

    return (
        <li className="card">
            <div className="card__info">
                <div className="card__text">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 47м</p>
                </div>
                <div className="card__add-btn page__button"></div>
            </div>
            <img className="card__image" src={props.img} alt=""/>
        </li>
    );
}

export default MoviesCard;