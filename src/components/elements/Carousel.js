import React, {Component} from 'react'
import './carousel.css';

export class Carousel extends Component {


    render() {
        const {items} = this.props;
        return (

                
            <div className="carousel-container">
                {items.map(item => 
                    <div key={item.id}
                        item={item}
                        
                        className="shipPic-container">
                        <img src={item.img} alt="" className="shipPic" onClick={this.props.markSelected.bind(this, item.id)} />
                    </div>)}
            </div>

        )
    }
}

export default Carousel
