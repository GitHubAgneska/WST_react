import React, { Component } from 'react'
import './header.css';
import Nav from '../elements/Nav';


export class Header extends Component {
    render() {
        return (
        <div className="header">
            <Nav />
            <div className="titles-container">
                <h1>Wild Space travel</h1>
                <h3>Just go beyond!</h3>
            </div>
        </div>
        )
    }
}

export default Header
