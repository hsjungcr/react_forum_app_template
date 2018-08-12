import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class HeaderNav extends Component {
    state = {};
    handleItemClick = (event, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <Menu stackable>
                <Menu.Item>
                    <img src='/logo.png' />
                </Menu.Item>
                <Menu.Item
                    name='announcement'
                    active={activeItem === 'announcement'}
                    onClick={this.handleItemClick}>
                    <Link to='announcement'>Announcement</Link>
                </Menu.Item>

                <Menu.Item
                    name='testimonials'
                    active={activeItem === 'testimonials'}
                    onClick={this.handleItemClick}>
                    Testimonials
                </Menu.Item>
                <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
                    Sign-in
                </Menu.Item>
            </Menu >
        );
    }
}
export default HeaderNav;