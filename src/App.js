import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// export data
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState ({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;