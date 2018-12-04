import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home';
import Level1 from '../components/level1';
import About from '../components/about';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/level1' component={Level1}/>
        <Route path='/about' component={About} />
        <Redirect from='*' to='/' />
    </Switch>
