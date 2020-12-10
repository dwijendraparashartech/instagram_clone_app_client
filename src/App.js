import React from 'react';
import Navbar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Route exact Path="/">
          <Home />
        </Route>
        <Route Path="/signin">
          <Signin />
        </Route>
        <Route Path="/signup">
          <Signup />
        </Route>
        <Route Path="/profile">
          <Profile />
        </Route>
        <Route Path="/create">
          <CreatePost />
        </Route>
    </BrowserRouter>
  );
}

export default App;
