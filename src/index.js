import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import vocabulary from './static/vocabulary';

const sites = ['Basics 1', 'Basics 2', 'Basics 3', 'Basics 4', 'Basics 5', 'Basics 6', 'Nominative Pronouns'];

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={props => (
        <div>
          <div className="index-list">
            {sites.map(site => {
              let url = site.replace(/ /g,"_").toLowerCase();
              return(
                <NavLink key={url} to={`/${url}`} activeClassName="selected">{site}</NavLink>
              )
            }
            )}
          </div>
        </div>
      )}>
      </Route>
      {sites.map(site => {
        let url = site.replace(/ /g,"_").toLowerCase();
        return(
          <Route key={url} path={`/${url}`} render={props =>
            <App {...props} vocabulary={vocabulary[url]}/>
          }>
          </Route>
        )}
      )}
    </Switch>
  </Router>,
document.getElementById('root'));
registerServiceWorker();
