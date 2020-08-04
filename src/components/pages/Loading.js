import React, {Component} from 'react'
import './loading.css';
import {Link} from 'react-router-dom';

export class Loading extends Component {
    
    render() {
        return (
            <div className="background">
                <Link to="/home">
                    <h3>Wild Space travels<br></br>will be with you within seconds..</h3>
                </Link>
            </div>
        )
    }
}

export default Loading
