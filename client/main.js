import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import App from '../imports/client/App.jsx';
import HomePage from '../imports/client/HomePage.jsx';
import Principal from '../imports/client/Info.jsx';

Meteor.startup(() => {
  render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path= 'map' component={Principal}/>
			<Route path= 'info' component={Principal}/>
    </Route>
  </Router>, document.getElementById('render-target')
);
});
