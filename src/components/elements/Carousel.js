import React, {Component} from 'react'
import './carousel.css';

export class Carousel extends Component {

    render() {
        const { items } = this.props;
        return (
            <div>
                
            <div className="carousel-container">
                {items.map(item => 
                    <div key={item.id} className="shipPic-container">
                        <img src={item.img} alt="" className="shipPic"/>
                    </div>)}
            </div>
            </div>
        )
    }
}

export default Carousel
