import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';


import App from '../imports/client/App.jsx';
import HomePage from '../imports/client/HomePage.jsx';
import Principal from '../imports/client/Principal.jsx';
import PrincipalWorld from '../imports/client/PrincipalWorld.jsx';
import Info from '../imports/client/Info.jsx';
import problematica from '../imports/client/problematica.jsx';
import queHacer from '../imports/client/queHacer.jsx';

Meteor.startup(() => {
  render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path= 'map' component={Principal}/>
      <Route path= 'mapW' component={PrincipalWorld}/>
			<Route path= 'info' component={Info}/>
      <Route path= 'problematica' component={problematica}/>
      <Route path= 'queHacer' component={queHacer}/>
    </Route>
  </Router>, document.getElementById('render-target')
);
});
