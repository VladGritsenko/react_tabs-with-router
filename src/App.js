import React from 'react';
import './App.css';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import TabsPage from './Components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <nav>
        <ul>
          <li className="App__item">
            <NavLink
              to="/home"
              className="App__link"
              activeClassName="App__link App__link--active"
            >
              Home Page
            </NavLink>
          </li>
          <li className="App__item">
            <NavLink
              to="/tabs"
              className="App__link"
              activeClassName="App__link App__link--active"
            >
              Tabs Page
            </NavLink>
          </li>
        </ul>
      </nav>
      <Route path="/home" exact component={HomePage} />
      <Route path="/tabs/:id?" render={({ match }) => <TabsPage tabs={tabs} match={match.params.id} />}/>
    </BrowserRouter>
  </div>
  )
};

export default App;
