
import './App.css';
import React from 'react';

import Home from './Pages/Home';
import Rooms from './Pages/Room';
import SingleRoom from './Pages/SingleRoom';
import Navbar from './components/Navbar';

import {Route , Switch} from 'react-router-dom';


function App() {
  return (
    <>     
    <Navbar/>
    <Switch>
    
     <Route exact path='/rooms/' component={Rooms} />
     <Route exact path='/rooms/:slug' component={SingleRoom} />
     <Route  component={Home} />
    </Switch>
    </>
  );
}

export default App;
 