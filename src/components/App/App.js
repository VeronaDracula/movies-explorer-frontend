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
import PopupError from '../PopupError/PopupError.js';
import {apiMain} from "../../utils/MainApi";
import {apiAuth} from "../../utils/AuthApi";

function App() {

    const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
    const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
    const [isPopupErrorOpen, setIsPopupErrorOpen] = React.useState(false);
    const [errorText, setErrorText] = React.useState('');
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
            })
            .catch(err => {
                if (err === 409) {
                    setErrorText("Пользователь с указанным email уже существует");
                }
                console.log(err);
                handlePopupErrorClick();
            })
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
        setLoggedIn(false);
        setCurrentUser({});

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

    function handlePopupErrorClick() {
        setIsPopupErrorOpen(true);
    }

    function closeAllPopups() {
        setIsPopupMenuOpen(false);
        setIsPopupEditProfileOpen(false);
        setIsPopupErrorOpen(false)
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
                setInfoTooltipText('Данные обновлены');
            })
            .catch(err => console.log(err))
    }

    //получение карточек из нашей бзаы
    React.useEffect(() => {
        if(loggedIn === true) {
            apiMain
                .getCards()
                .then(cardsData => {
                    setOurCards(cardsData.filter(cardData => cardData.owner ===  currentUser._id))
                })
                .catch(err => console.log(err))
        }
    }, [loggedIn, currentUser]);

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
                        <Main loggedIn={loggedIn} onMenu={handlePopupMenuClick} isOpenMenu={isPopupMenuOpen} onClose={closeAllPopups}/>
                    </Route>

                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>

                <PopupError errorText={errorText} isOpen={isPopupErrorOpen} onClose={closeAllPopups}/>
            </div>
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
