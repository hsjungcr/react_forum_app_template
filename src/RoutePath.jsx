import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/page/Main';


class RoutePath extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main} />
            </Switch>
        )
    }
}

export default RoutePath;