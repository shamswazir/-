
import './App.css';
import React from 'react';

import Home from './Pages/Home';
import Rooms from './Pages/Room';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import Navbar from './components/Navbar';

import {Route , Switch} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
     <Route exact path='/home' component={Home} />
     <Route exact path='/rooms/' component={Rooms} />
     <Route exact path='/rooms/:slug' component={SingleRoom} />
     <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
 