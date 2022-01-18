import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoreBtn from '../MoreBtn/MoreBtn.js';
import Preloader from '../Preloader/Preloader.js';

function Movies(props) {

    return (
        <main className="content">
            <section className="search">
                <SearchForm onSearchMovies={props.onSearchMovies}/>
            </section>

            <section className="movies">
                <Preloader isActive={props.isActive}/>
                <MoviesCardList cards={props.cards}/>
            </section>

            <section className="more-button page__content">
                <MoreBtn/>
            </section>
        </main>
    );
}

export default Movies;