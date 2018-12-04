import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Level1 from '../components/level1';
import Level2 from '../components/level2';

export default props =>
    <React.Fragment>
        {props.children}
        <Switch>
            <Route exact path={`${props.match.path}/`} component={Level1} />
            <Route path={`${props.match.path}/level2`} component={Level2} />
            <Redirect from='*' to='/' />
        </Switch>
    </React.Fragment>

