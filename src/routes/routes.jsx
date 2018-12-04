import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home';
import Levels from './levelsRoute';
import About from '../components/about';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/level1' component={Levels}/>
        <Route path='/about' component={About} />
        <Redirect from='*' to='/' />
    </Switch>
