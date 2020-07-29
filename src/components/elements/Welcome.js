import React, {Component} from 'react'
import CriteriaForm from './CriteriaForm'

export class welcome extends Component {
    render() {
        return (
            <div>
                <h3>Start selecting your criteria</h3>
                <CriteriaForm />
            </div>
        )
    }
}

export default welcome
