import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import RoutePath from './RoutePath';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderNav />
                <BrowserRouter>
                    <RoutePath />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;