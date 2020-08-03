import React, {Component} from 'react'
import './carousel.css';
import ShipDetails from './ShipDetails';

export class Carousel extends Component {

    openDetails = () => {
        if (this.props.markSelected) { return <ShipDetails item={this.props.markSelected}/>}
    }

    getStyle = () => {
        return {
            width: this.props.markSelected ?
            '15rem': '10rem'
        }
    }


    render() {
        const {items} = this.props;
        return (
            <div>
                <div className="carousel-container">
                    {items.map(item => 
                        <div key={item.id}
                            item={item}      
                            className="shipPic-container">
                            <img src={item.img} alt="" 
                                onClick={this.props.markSelected.bind(this, item.id)}
                                // style={this.getStyle()} />
                                className="shipPic" />
                        </div>)}
                </div>
                <div>
                    <ShipDetails item={this.props.item} />
                </div>
            </div>
        )
    }
}

export default Carousel
