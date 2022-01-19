import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import Header from "../Header/Header";
import Footer from '../Footer/Footer.js';

function Movies(props) {
    const [click, setClick] = React.useState(false);

    function click1() {
        setClick(true)
        // console.log(click)
        return click
    }


    return (
        <>
            <Header onMenu={props.onMenu} isOpen={props.isOpen} onClose={props.onClose}/>

            <main className="content">
                <section className="search">
                    <SearchForm onSearchMovies={props.onSearchMovies} onClick={click1}/>
                </section>

                <section className="movies">
                    <MoviesNotFound isActiveFound={props.isActiveFound}/>
                    <Preloader isActive={props.isActive}/>
                    <MoviesCardList cards={props.cards} onAddCards={props.onAddCards} isClick={click}/>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Movies;