import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Header from "../Header/Header";
import Footer from '../Footer/Footer.js';

function SavedMovies(props) {

    return (
        <>
            <Header onMenu={props.onMenu} isOpen={props.isOpen} onClose={props.onClose}/>

            <main className="content">
                <section className="search">
                    <SearchForm onSearchMovies={props.onSearchMovies}/>
                </section>

                <section className="movies">
                    <MoviesCardList cards={props.cards}/>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default SavedMovies;