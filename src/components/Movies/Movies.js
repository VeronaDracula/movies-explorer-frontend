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

    const [keyword, setKeyword] = React.useState(undefined);
    const [cards, setCards] = React.useState([]);
    const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
    const [filterDuration, setFilterDuration] = React.useState(JSON.parse(localStorage.filterDuration));
    const [errorText, setErrorText] = React.useState(false);
    const [clickSearch, setClickSearch] = React.useState(false);
    const [clickDuration, setClickDuration] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false);

    //отслеживаем нажатие кнопки
    function listenerClick(button, setButton) {
        if(button) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    //preloader
    function preloaderState(isLoading) {
        if(isLoading) {
            setIsPreloaderActive(true);
        }
        else{
            setIsPreloaderActive(false);
        }
    }

    //спикок карточек после поиска
    function getSearchCardsList() {
        // setCards(searchCards(JSON.parse(localStorage.getItem('cards')), keyword)) //правильно

        const cardsList = searchCards(JSON.parse(localStorage.getItem('cards')), localStorage.getItem('keyword'));
        localStorage.setItem('moviesCards', JSON.stringify(cardsList));

        setCards(JSON.parse(localStorage.getItem('moviesCards')))

        listenerClick(clickSearch, setClickSearch)

        if (JSON.parse(localStorage.moviesCards).length === 0) {
            setNotFound(true)
        }
        else {
            setNotFound(false)
        }
    }

    //получаем ключевое слово
    function readKeyword(keyword2) {
        localStorage.setItem('keyword', keyword2);
        setKeyword(localStorage.getItem('keyword'))
        return localStorage.getItem('keyword')
    }

    //поиск короткометражек
    function getSearchCardsListDuration() {
        if (filterDuration) {
            setFilterDuration(false)
            localStorage.setItem('filterDuration', JSON.stringify(false));
            getSearchCardsList()
            listenerClick(clickDuration, setClickDuration)
        }
        else {
            setFilterDuration(true)
            localStorage.setItem('filterDuration', JSON.stringify(true));
            // setCards(searchCardsDuration(cards))
            localStorage.setItem('moviesCards', JSON.stringify(searchCardsDuration(JSON.parse(localStorage.getItem('moviesCards')))));
            setCards(JSON.parse(localStorage.getItem('moviesCards')))
            listenerClick(clickDuration, setClickDuration)
        }
    }

    //проверка налиия ключевго слова
    function validationInput() {
        if (keyword === undefined) {
            setErrorText(true)
        }
        else {
            setErrorText(false)
            handleSearchMovies()
        }
    }

    //запрос данных карточки из общей базы
    function handleSearchMovies() {
        preloaderState(true)
        apiMovies
            .getCards()
            .then(cardsData => {
                localStorage.setItem('cards', JSON.stringify(cardsData));
                // setCards(JSON.parse(localStorage.getItem('cards')))
            })
            .catch(err => console.log(err))
            .finally(() => {
                preloaderState(false)
                getSearchCardsList();
            });
    }



    return (
        <>
            <Header onMenu={props.onMenu} isOpen={props.isOpen} onClose={props.onClose}/>

            <main className="content">
                <section className="search">
                    <SearchForm onSearchMovies ={validationInput}
                                onSearchMoviesFilter={readKeyword}
                                onGetSearchCardsListDuration={getSearchCardsListDuration}
                                errorText={errorText}
                                isActiveCheckbox={filterDuration}
                    />
                </section>

                <section className="movies">
                    <MoviesNotFound isActiveFound={notFound}/>
                    <Preloader isActive={isPreloaderActive}/>
                    <MoviesCardList cards={cards} ourCards={props.ourCards} onAddCard={props.onAddCard}
                                    onClickSearch={clickSearch}
                                    onClickDuration={clickDuration}
                    />
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Movies;