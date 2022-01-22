import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Header from "../Header/Header";
import Footer from '../Footer/Footer.js';
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import Preloader from "../Preloader/Preloader";



function SavedMovies(props) {



    return (
        <>
            <Header onMenu={props.onMenu} isOpen={props.isOpen} onClose={props.onClose}/>

            <main className="content">
                <section className="search">
                    <SearchForm onSearchMovies={props.onSearchMovies}/>
                </section>

                <section className="movies">
                    <MoviesNotFound isActiveFound={props.isActiveFound}/>
                    <Preloader isActive={props.isActive}/>
                    <MoviesCardList ourCards={props.ourCards}  onDeleteCard={props.onDeleteCard}/>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default SavedMovies;

//cards={props.cards}