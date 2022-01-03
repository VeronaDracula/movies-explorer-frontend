import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';

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

                    <Route path="/" >
                        <Main/>
                    </Route>

                    <Route path="/movies">

                    </Route>

                    <Route path="/saved-movies">

                    </Route>

                    <Route path="/profile">

                    </Route>
                </Switch>

        </div>
    </div>
  );
}

export default App;
