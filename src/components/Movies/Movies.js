import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import Header from "../Header/Header";
import Footer from '../Footer/Footer.js';

import {searchCards} from "../../utils/Search";

function Movies(props) {
    // const [click, setClick] = React.useState(false);

    const [keyword, setKeyword] = React.useState('');
    const [cards, setCards] = React.useState([]);

    // function handleThemeChange(e) {
    //     setKeyword(e.target.value);
    //     console
    // }



    function click1() {

        // setClick(true)
        setCards(searchCards(JSON.parse(localStorage.getItem('cards')), keyword))
        // console.log(click)
        // readKeyword()
        console.log(searchCards(JSON.parse(localStorage.getItem('cards')), keyword))
        return searchCards(JSON.parse(localStorage.getItem('cards')), keyword)
    }

    function readKeyword(keyword2) {
        setKeyword(keyword2)
        // console.log(keyword2)
        // console.log(keyword)
        // return keyword2
    }

    return (
        <>
            <Header onMenu={props.onMenu} isOpen={props.isOpen} onClose={props.onClose}/>

            <main className="content">
                <section className="search">
                    <SearchForm onSearchMovies={props.onSearchMovies} onClick={click1} onSearchMoviesFilter={readKeyword}/>
                </section>

                <section className="movies">
                    <MoviesNotFound isActiveFound={props.isActiveFound}/>
                    <Preloader isActive={props.isActive}/>
                    <MoviesCardList cards={cards} ourCards={props.ourCards} onAddCard={props.onAddCard}/>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Movies;