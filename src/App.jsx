import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SportsPage from './components/SportsPage';
import MapPage from './components/MapPage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import HelpPage from './components/HelpPage';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map/:sportId/:city" component={MapPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/sports" component={SportsPage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={Contact} />
        <Route path="/help" component={HelpPage} />
      </Switch>
    </div>
  );
}

export default App;
