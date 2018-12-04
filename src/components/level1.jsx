import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import level2 from './level2';

export default props =>
    <React.Fragment>
        <h1>Level 1</h1>
        <ul>
            <li><Link to={`${props.match.path}/level2`}>Level 2</Link></li>
        </ul>

        <Switch>
            <Route path={`${props.match.path}/level2`} component={level2} />
        </Switch>
    </React.Fragment>