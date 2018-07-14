import { Component as React } from 'react';
import { Switch, Route } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main} />
            </Switch>

        )
    }
}

export default Router;