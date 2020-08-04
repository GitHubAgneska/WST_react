import React, {Component} from 'react'
import CriteriaForm from './CriteriaForm';
import {Link} from 'react-router-dom';
import './welcome.css';

export class welcome extends Component {
    render() {
        return (
            <div className="startBooking-container content">
                <h3>Start Booking</h3>
                <Link to="/ships">See Ships</Link>
                <CriteriaForm />
            </div>
        )
    }
}

export default welcome
