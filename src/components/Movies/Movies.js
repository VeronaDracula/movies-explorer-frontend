import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import Header from "../Header/Header";
import Footer from '../Footer/Footer.js';

import {searchCards, searchCardsDuration} from "../../utils/Search";
import {apiMovies} from "../../utils/MoviesApi";

function Movies(props) {

    const [keyword, setKeyword] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
    const [filterDuration, setFilterDuration] = React.useState(false);

    function preloaderState(isLoading) {
        if(isLoading) {
            setIsPreloaderActive(true);
        }
        else{
            setIsPreloaderActive(false);
        }
    }

    function getSearchCardsList() {
        setCards(searchCards(JSON.parse(localStorage.getItem('cards')), keyword))
        // setCards(searchCards(cards, keyword))
    }

    function readKeyword(keyword2) {
        setKeyword(keyword2)
    }

    function getSearchCardsListDuration() {
        if (filterDuration) {
            setFilterDuration(false)
            getSearchCardsList()
        }
        else {
            setFilterDuration(true)
            setCards(searchCardsDuration(cards))
        }
    }

    //запрос данных карточки из общей базы
    function handleSearchMovies() {
        preloaderState(true)
        apiMovies
            .getCards()
            .then(cardsData => {
                localStorage.setItem('cards', JSON.stringify(cardsData));
                setCards(JSON.parse(localStorage.getItem('cards')))
            })
            .catch(err => console.log(err))
            .finally(() => {
                preloaderState(false)
                // foundActive(JSON.parse(localStorage.getItem('cards')))
                getSearchCardsList()
            });
    }



    return (
        <>
            <Header onMenu={props.onMenu} isOpen={props.isOpen} onClose={props.onClose}/>

            <main className="content">
                <section className="search">
                    <SearchForm onSearchMovies={handleSearchMovies}
                                // onSearchCardsList={getSearchCardsList}
                                onSearchMoviesFilter={readKeyword}
                                onGetSearchCardsListDuration={getSearchCardsListDuration}

                    />
                </section>

                <section className="movies">
                    <MoviesNotFound isActiveFound={props.isActiveFound}/>
                    <Preloader isActive={isPreloaderActive}/>
                    <MoviesCardList cards={cards} ourCards={props.ourCards} onAddCard={props.onAddCard}/>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Movies;