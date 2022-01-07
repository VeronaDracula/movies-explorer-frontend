import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="page">
            <Header/>

            <Switch>
                <Route path="/signin">

                </Route>

                <Route path="/signup">

                </Route>

                <Route exact path="/" >
                    <Main/>
                </Route>

                <Route path="/movies">
                    <Movies/>
                </Route>

                <Route path="/saved-movies">

                </Route>

                <Route path="/profile">

                </Route>
            </Switch>

            <Footer />
        </div>
    </div>
  );
}

export default App;
