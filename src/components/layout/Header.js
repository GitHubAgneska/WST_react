import React, { Component } from 'react'
import './header.css';


export class Header extends Component {
    render() {
        return (
        <div className="header">
            <div className="titles-container">
                <h1>Wild Space travel</h1>
                <h3>Just go beyond!</h3>
            </div>
        </div>
        )
    }
}

export default Header
