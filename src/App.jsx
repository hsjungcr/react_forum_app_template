import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderNav from './components/navigation/HeaderNav';
import RoutePath from './RoutePath';
import PageBanner from './components/navigation/PageBanner';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <RoutePath />
                </BrowserRouter>
        );
    }
}

export default App;