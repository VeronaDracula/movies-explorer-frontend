import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';

import './App.css';

function App() {

    const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
    const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);

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
                    <Movies/>
                    <Footer/>
                </Route>

                <Route path="/saved-movies">
                    <Header onMenu={handlePopupMenuClick} isOpen={isPopupMenuOpen} onClose={closeAllPopups}/>
                    <SavedMovies/>
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
