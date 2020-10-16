import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import NotFound from './components/NotFound/NotFound';
import ServiceList from './components/DashBoard/ServiceList/ServiceList';
import { useState } from 'react';
import PrivetRoute from './components/Login/PrivetRoute/PrivetRoute';
import LogIn from './components/Login/Login';
import Review from './components/DashBoard/Review/Review';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
      <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivetRoute path="/dashboard/:id">
          <DashBoard></DashBoard>
        </PrivetRoute>
        <PrivetRoute path="/serviceList">
          <ServiceList></ServiceList>
        </PrivetRoute>
        <PrivetRoute path="/review">
          <Review></Review>
        </PrivetRoute>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
