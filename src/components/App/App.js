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
import {apiMovies} from "../../utils/MoviesApi";
import {apiMain} from "../../utils/MainApi";
import {apiAuth} from "../../utils/AuthApi";

function App() {

    const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
    const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
    const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);

    const [notFound, setNotFound] = React.useState(false);

    // const [selectedCard, setSelectedCard] = React.useState(emptyCard);
    const [cards, setCards] = React.useState([]);
    const [ourCards, setOurCards] = React.useState([]);

    const [currentUser, setCurrentUser] = React.useState({});

    const [loggedIn, setLoggedIn] = React.useState(false);

    const history = useHistory();


    React.useEffect(() => {
        tokenCheck();
    }, [history, loggedIn]);

    React.useEffect(() => {
        if(loggedIn === true) {
            history.push('/movies');
        }
    }, [loggedIn, history]);

    //проверка токена
    function tokenCheck() {
        const jwt = localStorage.getItem('jwt');
        if (jwt){
            apiAuth
                .getContent(jwt)
                .then((data) => {
                    if (data){
                        setLoggedIn(true);
                        history.push('/movies');
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
                // handleInfoTooltipOpen();
            })
            .catch(err => {
                console.log(err);
                // handleInfoTooltipOpen();
                // setInfoTooltipImg(imgLoginNo);
                // setInfoTooltipText('Что-то пошло не так!\n' + 'Попробуйте ещё раз.');
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
    }


    //выход
    function signOut(){
        localStorage.removeItem('jwt');
        history.push('/signin');
        setLoggedIn(false);
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

    //надо ли выводить надпись "Ничего не найдено"
    function foundActive (movies) {
        if ( movies.length === 0 ) {
            setNotFound(true);
        }

        else {
            setNotFound(false);
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
                foundActive(JSON.parse(localStorage.getItem('cards')))
            });
    }


    //новые карточки
    function handleAddCards(newCards) {
        // let cardsNew = Object.assign([], cards);
        // newCards.map((newCard) =>
        //     cardsNew.push(newCard)
        // )
        // setCards(cardsNew);
    }



    //запрос данных карточки из нашей базы
    function handleSearchMoviesSaved() {
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

    //добавление новой карточки в нашу базу
    function handleAddMoviesSubmit(card) {
        // const isAdded = ourCards.some(ourCard => (ourCard.movieId === card.id) && (ourCard.id ===  currentUser._id));
        //
        // if (!isAdded) {
            apiMain
                .addCardApi(card)
                .then(newCard => {
                    setOurCards([newCard, ...ourCards]);
                })
                .catch(err => console.log(err))

        // }
    }

    //обработчик удаления карточки из нашей базы
    function handleDeleteCardSubmit(cardDataDelete) {
        apiMain
            .deleteCardApi(cardDataDelete._id)
            .then(() => {
                setCards((state) => state.filter(cardData => cardDataDelete._id !== cardData._id))
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
        // buttonState(buttonText, true);
        apiMain
            .createNewUserInfoApi(newUserData)
            .then(newUserData => {
                setCurrentUser(newUserData);
                closeAllPopups();
            })
            .catch(err => console.log(err))
            .finally(() => {
                // buttonState(buttonText, false)
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
                        onSearchMovies={handleSearchMovies}
                        isActive={isPreloaderActive}
                        onFound={foundActive}
                        isActiveFound={notFound}
                        // onAddCards={handleAddCards}
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
                        onSearchMovies={handleSearchMoviesSaved}
                        isActive={isPreloaderActive}
                        onFound={foundActive}
                        isActiveFound={notFound}
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
                    />

                    <Route path="/" >
                        <Main />
                    </Route>
                </Switch>

            </div>

        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
