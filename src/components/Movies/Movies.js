import React from 'react';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoreBtn from '../MoreBtn/MoreBtn.js';

import './Movies.css';

function Movies() {

    return (
        <main className="content">
            <section className="search">
                <SearchForm/>
            </section>

            <section className="movies">
                <MoviesCardList/>
            </section>

            <section className="more-button page__content">
                <MoreBtn/>
            </section>
        </main>
    );
}

export default Movies;