import React, { Component } from 'react';
import './App.css';

import Menu from './components/template/menu';
import Routes from './routes/routes';
import Main from './components/template/main';

import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Menu />
          <Main>
            <Routes />
          </Main>
        </div>
      </HashRouter>
    );
  }
}

export default App;
