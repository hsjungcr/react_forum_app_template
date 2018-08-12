import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/page/Main';
import AnnouncementListPage from './components/page/announcement/AnnouncementListPage';
import HeaderNav from './components/navigation/HeaderNav';
import PageBanner from './components/navigation/PageBanner';


class RoutePath extends Component {
    render() {
        return (
            <div>
                <PageBanner />
                <HeaderNav />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/announcement' component={AnnouncementListPage} />
                </Switch>
            </div>
        )
    }
}

export default RoutePath;