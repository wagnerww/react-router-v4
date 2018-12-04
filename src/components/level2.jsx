import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import level3 from './level3';

export default props =>
    <React.Fragment>
        <h1>Level 2</h1>
        <ul>
            <li><Link to={`${props.match.path}/level3`}>Level 3</Link></li>
        </ul>

        <Switch>
            <Route path={`${props.match.path}/level3`} component={level3} />
        </Switch>
    </React.Fragment>