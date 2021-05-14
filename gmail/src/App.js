import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Mail from './Mail';
import EmailList from './EmailList'



function App() {
  return (
      <Router>
    <div className="app">

      <Header />
      <div className='app__body'>
        <Sidebar />
        <Switch>
          <Route path='/mail' component={Mail} />
          <Route path='/' component={EmailList} />
        </Switch>

      </div>
      <h1>GMAIL</h1>
    </div>
      </Router>
  );
}

export default App;
