import React from 'react';
import './MoviesCard.css';

import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import {Route, Switch} from "react-router-dom";

function MoviesCard(props) {

    const currentUser = React.useContext(CurrentUserContext);

    // const isAdded = props.ourCards.some(ourCard => (ourCard.movieId === props.card.id) && (ourCard._id ===  currentUser._id));
    // const cardAddButtonClassName = (
    //     `${isAdded ? `card__btn ${props.typePageBtn} card__btn_active page__button` : `card__btn ${props.typePageBtn} page__button`}`
    // );

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

    return (
        <li className="card">
            <div className="card__info">
                <div className="card__text">
                    <h2 className="card__name">{props.nameRU}</h2>
                    <p className="card__time">{props.duration}</p>
                </div>
                <Switch>
                    <Route path="/movies">
                        <button className={`card__btn ${props.typePageBtn} page__button`} type="button"
                                onClick={handleAddCardClick}></button>
                    </Route>

                    <Route path="/saved-movies">
                        <button className={`card__btn ${props.typePageBtn} page__button`} type="button"
                                onClick={handleDeleteCardClick}></button>
                    </Route>
                </Switch>
            </div>
            <img className="card__image" src={props.image} alt={props.nameRU}/>
        </li>
    );
}

export default MoviesCard;


//className={`card__btn ${props.typePageBtn} page__button`}