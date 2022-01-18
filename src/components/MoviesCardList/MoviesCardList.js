import React from 'react';
import {Route, Switch} from "react-router-dom";
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {

    return (
        <div className="page__content">
            <ul className="cards">
                <Switch>
                    <Route path="/movies">
                        {props.cards.map((card) => (<MoviesCard card={card}
                                                                nameRU={card.nameRU}
                                                                duration={card.duration}
                                                                image={card.image.url}
                                                                trailer={card.trailerLink}
                                                                key={card.id}
                                                                typePageBtn="card__btn_type_add"
                        />))}
                    </Route>

                    <Route path="/saved-movies">
                        {/*{props.cards.map((card) => (<MoviesCard card={card}*/}
                        {/*                                        nameRU={card.nameRU}*/}
                        {/*                                        duration={card.duration}*/}
                        {/*                                        image={card.image.url}*/}
                        {/*                                        trailer={card.trailerLink}*/}
                        {/*                                        key={card._id}*/}
                        {/*                                        typePageBtn="card__btn_type_close"*/}
                        {/*/>))}*/}
                    </Route>
                </Switch>
            </ul>
        </div>
    );
}

export default MoviesCardList;