import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="page">
            <Header/>

            <Switch>
                <Route path="/signin">
                    <Login/>
                </Route>

                <Route path="/signup">
                    <Register/>
                </Route>

                <Route path="/" >
                    <Main/>
                    <Footer/>
                </Route>

                <Route path="/movies">
                    <Movies/>
                    <Footer/>
                </Route>

                <Route path="/saved-movies">
                    <SavedMovies/>
                    <Footer/>
                </Route>

                <Route path="/profile">

                </Route>
            </Switch>
        </div>
    </div>
  );
}

export default App;
