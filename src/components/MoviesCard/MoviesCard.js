import React from 'react';
import './MoviesCard.css';

import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import {Route, Switch} from "react-router-dom";

function MoviesCard(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const isAdded = props.ourCards.some(ourCard => (ourCard.movieId === props.movieId) && (ourCard.owner ===  currentUser._id));
    const cardAddButtonClassName = (
        `${isAdded ? `card__btn ${props.typePageBtn} card__btn_active page__button` : `card__btn ${props.typePageBtn} page__button`}`
    );

    function handleAddCardClick() {
        props.onAddCard({
            nameRU: props.nameRU,
            duration: props.duration,
            image: props.image,
            trailer: props.trailer,
            country: props.country,
            director: props.director,
            year: props.year,
            description: props.description,
            thumbnail: `https://api.nomoreparties.co/${props.thumbnail}`,
            movieId: props.movieId,
            nameEN: props.nameEN,
        });
    }

    function handleDeleteCardClick() {
        props.onDeleteCard(props.card)
    }

    function countDuration(value) {
        let duration = value;
        let hours = 0;
        while(duration >= 60) {
            duration = duration - 60;
            hours ++;
        }
        const minutes = duration;
        return `${hours}ч ${minutes}м`
    }

    return (
        <li className="card">
            <div className="card__info">
                <div className="card__text">
                    <h2 className="card__name">{props.nameRU}</h2>
                    <p className="card__time">{countDuration(props.duration)}</p>
                </div>
                <Switch>
                    <Route path="/movies">
                        <button className={cardAddButtonClassName} type="button"
                                onClick={handleAddCardClick}></button>
                    </Route>

                    <Route path="/saved-movies">
                        <button className={`card__btn ${props.typePageBtn} page__button`} type="button"
                                onClick={handleDeleteCardClick}></button>
                    </Route>
                </Switch>
            </div>
            <a href={props.trailer} className="page__link" target="_blank" rel="noreferrer">
                <img className="card__image" src={props.image} alt={props.nameRU}/>
            </a>
        </li>
    );
}

export default MoviesCard;


//className={`card__btn ${props.typePageBtn} page__button`}