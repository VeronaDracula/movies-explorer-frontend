import React from 'react';
import {Route, Switch} from "react-router-dom";

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

function MoviesCardList() {

    return (
        <div className="page__content">
            <ul className="cards">
                <Switch>
                    <Route path="/movies">
                        <MoviesCard img={movie1}/>
                        <MoviesCard img={movie2}/>
                        <MoviesCard img={movie3}/>
                        <MoviesCard img={movie4}/>
                        <MoviesCard img={movie5}/>
                        <MoviesCard img={movie6}/>
                        <MoviesCard img={movie7}/>
                        <MoviesCard img={movie8}/>
                        <MoviesCard img={movie9}/>
                        <MoviesCard img={movie10}/>
                        <MoviesCard img={movie11}/>
                        <MoviesCard img={movie12}/>
                    </Route>

                    <Route path="/saved-movies">
                        <MoviesCard img={movie1}/>
                        <MoviesCard img={movie2}/>
                        <MoviesCard img={movie3}/>
                    </Route>
                </Switch>
            </ul>
        </div>
    );
}

export default MoviesCardList;