import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import vocabulary from './static/vocabulary';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={props => (
        <div>
          <ul className="index-list">
            <li>
              <NavLink to="/basics" activeClassName="selected">Basics</NavLink>
            </li>
          </ul>
        </div>
      )}>
      </Route>
      <Route path="/basics" render={props => (
        <App {...props} vocabulary={vocabulary.basics}/>
      )}>
      </Route>
    </Switch>
  </Router>,
document.getElementById('root'));
registerServiceWorker();
