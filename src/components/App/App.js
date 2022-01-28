import React from 'react';
import { Route, Switch, useHistory} from 'react-router-dom';
import './App.css';

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';
import {apiMain} from "../../utils/MainApi";
import {apiAuth} from "../../utils/AuthApi";

function App() {

    const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
    const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
    const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
    const [cards, setCards] = React.useState([]);
    const [ourCards, setOurCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [infoTooltipText, setInfoTooltipText] = React.useState('');

    const history = useHistory();

    React.useEffect(() => {
        if(loggedIn === true) {
            history.push('/movies');
        }
    }, [loggedIn]);

    React.useEffect(() => {
        tokenCheck();
    }, []);

    //проверка токена
    function tokenCheck() {
        const jwt = localStorage.getItem('jwt');
        if (jwt){
            apiAuth
                .getContent(jwt)
                .then((data) => {
                    if (data){
                        setLoggedIn(true);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    //регистрация
    function handleRegister({name, email, password}) {
        apiAuth
            .register({name, email, password})
            .then(response => {
                handleLogin({email, password})
                // handleInfoTooltipOpen();
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                handleLogin({email, password})
            });
    }

    //вход
    function handleLogin({email, password}){
        apiAuth
            .authorization({email, password})
            .then(data => {
                if(data.token) {
                    const token = data.token;
                    localStorage.setItem('jwt', token);
                    tokenCheck();
                    setLoggedIn(true);
                }
            })
            .catch(err => {
                console.log(err);
            })

        localStorage.setItem('moviesCards', JSON.stringify([]));
        localStorage.setItem('inputSearchValue', '')
        localStorage.setItem('filterDuration', JSON.stringify(false));
    }


    //выход
    function signOut(){
        localStorage.removeItem('jwt');
        history.push('/signin');
        setLoggedIn(false);
        localStorage.removeItem('cards');
        localStorage.removeItem('moviesCards');
        localStorage.removeItem('inputSearchValue');
    }

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
        setInfoTooltipText('')
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


    //процесс загрузки данных карточек
    function preloaderState(isLoading) {
        if(isLoading) {
            setIsPreloaderActive(true);
        }

        else{
            setIsPreloaderActive(false);
        }
    }

    // получение карточек из нашей бзаы
    React.useEffect(() => {
        if(loggedIn === true) {
            preloaderState(true)
            apiMain
                .getCards()
                .then(cardsData => {
                    localStorage.setItem('ourCards', JSON.stringify(cardsData));
                    setOurCards(JSON.parse(localStorage.getItem('ourCards')))
                })
                .catch(err => console.log(err))
                .finally(() => {
                    preloaderState(false)
                });
        }
    }, [loggedIn]);

    //добавление и удаление новой карточки в нашу базу
    function handleAddMoviesSubmit(card) {
        const isAdded = ourCards.some(ourCard => (ourCard.movieId === card.movieId) && (ourCard.owner ===  currentUser._id));
        console.log(card)

        if (!isAdded) {
            apiMain
                .addCardApi(card)
                .then(newCard => {
                    setOurCards([newCard, ...ourCards]);
                    localStorage.setItem('ourCards', JSON.stringify(ourCards));
                })
                .catch(err => console.log(err))
        }
        // удалление со страницы movies
        else {
            ourCards.forEach(ourCard => {
                if (ourCard.movieId === card.movieId) {
                    handleDeleteCardSubmit(ourCard)
                    localStorage.setItem('ourCards', JSON.stringify(ourCards));
                }
            })
        }
    }

    //обработчик удаления карточки из нашей базы
    function handleDeleteCardSubmit(cardDataDelete) {
        apiMain
            .deleteCardApi(cardDataDelete._id)
            .then(() => {
                setOurCards((state) => state.filter(cardData => cardDataDelete._id !== cardData._id))
                localStorage.setItem('ourCards', JSON.stringify(ourCards));
            })
            .catch(err => console.log(err))
    }


    //получение данных пользователя
    React.useEffect(() => {
        if(loggedIn === true) {
            apiMain
                .getUserInfoApi()
                .then(userData => {
                    setCurrentUser(userData)
                })
                .catch(err => console.log(err))
        }

    }, [loggedIn]);

    //обновление данных пользователя
    function handleUpdateUser(newUserData) {
        apiMain
            .createNewUserInfoApi(newUserData)
            .then(newUserData => {
                setCurrentUser(newUserData);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setInfoTooltipText('Данные обновлены')
            });
    }


  return (
    <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">

                <Switch>
                    <Route path="/signin">
                        <Login onLogin={handleLogin}/>
                    </Route>

                    <Route path="/signup">
                        <Register onRegister={handleRegister}/>
                    </Route>

                    <ProtectedRoute
                        path="/movies"
                        loggedIn={loggedIn}
                        component={Movies}

                        cards={cards}
                        isActive={isPreloaderActive}
                        onAddCard={handleAddMoviesSubmit}

                        onMenu={handlePopupMenuClick}
                        isOpen={isPopupMenuOpen}
                        onClose={closeAllPopups}

                        ourCards={ourCards}
                    />

                    <ProtectedRoute
                        path="/saved-movies"
                        loggedIn={loggedIn}
                        component={SavedMovies}

                        ourCards={ourCards}
                        isActive={isPreloaderActive}
                        onDeleteCard={handleDeleteCardSubmit}


                        onMenu={handlePopupMenuClick}
                        isOpen={isPopupMenuOpen}
                        onClose={closeAllPopups}

                        cards={cards}
                    />

                    <ProtectedRoute
                        path="/profile"
                        loggedIn={loggedIn}
                        component={Profile}

                        onEditProfile={handlePopupEditProfileClick}
                        isOpen={isPopupEditProfileOpen}
                        onClose={closeAllPopups}
                        onSignOut={signOut}

                        onMenu={handlePopupMenuClick}
                        isOpenMenu={isPopupMenuOpen}
                        onUpdateUser={handleUpdateUser}
                        infoTooltipText={infoTooltipText}
                    />

                    <Route exact path="/" >
                        <Main/>
                    </Route>

                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
