import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Header from "../Header/Header";
import Footer from '../Footer/Footer.js';
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import Preloader from "../Preloader/Preloader";
import {searchCards, searchCardsDuration} from "../../utils/Search";


function SavedMovies(props) {

    const [keyword, setKeyword] = React.useState('');
    const [ourCards, setOurCards] = React.useState(props.ourCards);
    const [filterDuration, setFilterDuration] = React.useState(false);

    function getSearchCardsList() {
        setOurCards(searchCards(props.ourCards, keyword))
    }

    function readKeyword(keyword2) {
        setKeyword(keyword2)
    }

    React.useEffect(() => {
        setOurCards(props.ourCards)
    }, [props.onDeleteCard]);

    function getSearchCardsListDuration() {
        if (filterDuration) {
            setFilterDuration(false)
            getSearchCardsList()
        }
        else {
            setFilterDuration(true)
            setOurCards(searchCardsDuration(props.ourCards))
        }
    }

    return (
        <>
            <Header onMenu={props.onMenu} isOpen={props.isOpen} onClose={props.onClose}/>

            <main className="content">
                <section className="search">
                    <SearchForm
                                onSearchCardsList={getSearchCardsList}
                                onSearchMoviesFilter={readKeyword}
                                onGetSearchCardsListDuration={getSearchCardsListDuration}
                    />
                </section>

                <section className="movies">
                    <MoviesNotFound isActiveFound={props.isActiveFound}/>
                    <Preloader isActive={props.isActive}/>
                    <MoviesCardList ourCards={ourCards} onDeleteCard={props.onDeleteCard} cards={props.cards}/>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default SavedMovies;

//cards={props.cards}