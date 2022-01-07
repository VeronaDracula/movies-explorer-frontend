import React from 'react';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies() {

    return (
        <main className="content">
            <section className="search">
                <SearchForm/>
            </section>
            <section className="search">
                <MoviesCardList/>
            </section>
            <section className="search">
                <Preloader/>
            </section>

        </main>
    );
}

export default Movies;