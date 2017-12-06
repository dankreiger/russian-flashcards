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
          <div className="index-list">
            <NavLink to="/basics" activeClassName="selected">Basics</NavLink>
            <NavLink to="/nominative_pronouns" activeClassName="selected">Nominative Pronouns</NavLink>
          </div>
        </div>
      )}>
      </Route>
      {['basics', 'nominative_pronouns'].map(site =>
        <Route path={`/${site}`} render={props =>
          <App {...props} vocabulary={vocabulary[site]}/>
        }>
        </Route>
      )}
    </Switch>
  </Router>,
document.getElementById('root'));
registerServiceWorker();
