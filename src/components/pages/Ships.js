import React, {Component} from 'react'
import Carousel from '../elements/Carousel';

export class Ships extends Component {
    render() {
        return (
            <div>
                <h3>Our ships selection</h3>
                <Carousel
                    items={this.props.items}
                    markSelected={this.props.markSelected}
                    />
            </div>
        )
    }
}

export default Ships
