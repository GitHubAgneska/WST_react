import React, {Component} from 'react'
import Carousel from '../elements/Carousel';

export class Ships extends Component {
    render() {
        return (
            <div>
                <Carousel items={this.props.items}/>
            </div>
        )
    }
}

export default Ships
