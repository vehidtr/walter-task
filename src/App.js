import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Article from './pages/Article';
import Home from './pages/Home';
import { Header } from './components/Header';

function App() {
  const [search, setSearch] = React.useState('');

  return (
    <div className='App'>
      <header className='App-header'></header>
      <main>
        <Router>
          <Header search={search} setSearch={setSearch} />
          <Switch>
            <Route exact path='/'>
              <Home value={search} />
            </Route>
            <Route exact path='/article/:id'>
              <Article />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
