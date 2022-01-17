import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoreBtn from '../MoreBtn/MoreBtn.js';

function Movies(props) {

    return (
        <main className="content">
            <section className="search">
                <SearchForm/>
            </section>

            <section className="movies">
                <MoviesCardList cards={props.cards}/>
            </section>

            <section className="more-button page__content">
                <MoreBtn/>
            </section>
        </main>
    );
}

export default Movies;