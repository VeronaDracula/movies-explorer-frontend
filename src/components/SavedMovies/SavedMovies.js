import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies() {

    return (
        <main className="content">
            <section className="search">
                <SearchForm/>
            </section>

            <section className="movies">
                <MoviesCardList/>
            </section>
        </main>
    );
}

export default SavedMovies;