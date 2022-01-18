import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import {apiMovies} from "../../utils/MoviesApi";
import {apiMain} from "../../utils/MainApi";

function App() {

    const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
    const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);

    // const [selectedCard, setSelectedCard] = React.useState(emptyCard);
    const [cards, setCards] = React.useState([]);
    const [ourCards, setOurCards] = React.useState([]);

    //открытие и закрытие попапов
    function handlePopupMenuClick() {
        setIsPopupMenuOpen(true);
    }

    function handlePopupEditProfileClick() {
        setIsPopupEditProfileOpen(true);
    }

    function closeAllPopups() {
        setIsPopupMenuOpen(false);
        setIsPopupEditProfileOpen(false);
    }

    //закрытие попапа по Esc
    React.useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                closeAllPopups();
            }
        }

        document.addEventListener('keydown', closeByEscape)

        return () => document.removeEventListener('keydown', closeByEscape)
    }, [])



    //запрос данных карточки из общей базы
    function handleSearchMovies() {
        preloaderState(true)
        apiMovies
            .getCards()
            .then(cardsData => {
                localStorage.setItem('cards', cardsData);
                setCards(cardsData)
            })
            .catch(err => console.log(err))
            .finally(() => {
                preloaderState(false)
            });
    }


    //запрос данных карточки из нашей базы
    React.useEffect(() => {
        apiMain
            .getCards()
            .then(cardsData => {
                setOurCards(cardsData)
            })
            .catch(err => console.log(err))
    }, []);

    const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);


    //Процесс загрузки
    function preloaderState(isLoading) {
        if(isLoading) {
            setIsPreloaderActive(true);
        }

        else{
            setIsPreloaderActive(false);
        }
    }


  return (
    <div className="App">
        <div className="page">

            <Switch>
                <Route path="/signin">
                    <Login/>
                </Route>

                <Route path="/signup">
                    <Register/>
                </Route>

                <Route path="/movies">
                    <Header onMenu={handlePopupMenuClick} isOpen={isPopupMenuOpen} onClose={closeAllPopups}/>
                    <Movies cards={cards} onSearchMovies={handleSearchMovies} isActive={isPreloaderActive}/>
                    <Footer/>
                </Route>

                <Route path="/saved-movies">
                    <Header onMenu={handlePopupMenuClick} isOpen={isPopupMenuOpen} onClose={closeAllPopups}/>
                    <SavedMovies cards={ourCards}/>
                    <Footer/>
                </Route>

                <Route path="/profile">
                    <Header onMenu={handlePopupMenuClick} isOpen={isPopupMenuOpen} onClose={closeAllPopups}/>
                    <Profile onEditProfile={handlePopupEditProfileClick} isOpen={isPopupEditProfileOpen} onClose={closeAllPopups}/>
                </Route>

                <Route path="/" >
                    <Header/>
                    <Main/>
                    <Footer/>
                </Route>
            </Switch>
        </div>
    </div>
  );
}

export default App;
