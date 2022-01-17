import React from 'react';
import {Route, Switch} from "react-router-dom";
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';

import movie1 from '../../images/movie-1.jpg';
import movie2 from '../../images/movie-2.jpg';
import movie3 from '../../images/movie-3.jpg';
import movie4 from '../../images/movie-4.jpg';
import movie5 from '../../images/movie-5.jpg';
import movie6 from '../../images/movie-6.jpg';
import movie7 from '../../images/movie-7.jpg';
import movie8 from '../../images/movie-8.jpg';
import movie9 from '../../images/movie-9.jpg';
import movie10 from '../../images/movie-10.jpg';
import movie11 from '../../images/movie-11.jpg';
import movie12 from '../../images/movie-12.jpg';

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
                                                                trailerLink = {card.trailerLink}
                                                                key={card._id}
                                                                typePageBtn="card__btn_type_add"
                                                          />))}

                        {/*<MoviesCard img={movie1} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie2} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie3} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie4} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie5} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie6} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie7} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie8} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie9} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie10} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie11} typePageBtn="card__btn_type_add"/>*/}
                        {/*<MoviesCard img={movie12} typePageBtn="card__btn_type_add"/>*/}
                    </Route>

                    <Route path="/saved-movies">
                        <MoviesCard img={movie1} typePageBtn="card__btn_type_close"/>
                        <MoviesCard img={movie2} typePageBtn="card__btn_type_close"/>
                        <MoviesCard img={movie3} typePageBtn="card__btn_type_close"/>
                    </Route>
                </Switch>
            </ul>
        </div>
    );
}

export default MoviesCardList;