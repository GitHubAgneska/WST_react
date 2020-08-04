import React, { Component } from 'react'
import './criteria-form.css';
/* import Moment from 'react-moment';
import 'moment-timezone'; */

export class CriteriaForm extends Component {

  constructor(props) {
    super(props);
    this.state= { 
        date: this.getCurrentDate(),
        distance: 0,
        budget: 0,
    }
  }

/*   getCurrentDate = () => {
    let local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  }; */

  onChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <div className="content">
        <div className="criteriaForm-container">
          <form>
                <input 
                    type="date" 
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange(this.state.date)}
                    />
                <select name="distance" id="distance" form="distance" value={this.state.distance} onChange={this.onChange(this.state.distance)}>
                  <option value="distance1">1000-2000 parsecs</option>
                  <option value="distance2">2000-3000 parsecs</option>
                  <option value="distance3">4000-5000 parsecs</option>
                  <option value="distance4">6000 + parsecs</option>
                </select>
                <select name="budget" id="budget" form="budget" value={this.state.budget} onChange={this.onChange(this.state.budget)}>
                  <option value="budget1">less than 500 units</option>
                  <option value="budget2">500 to 1000 units</option>
                  <option value="budget3">1000 to 1500 units</option>
                  <option value="budget4">1500 units and more</option>
              </select>
            </form>
        </div>
        <div className="btn-container">
          <button 
            className="validate-btn"
            onClick={this.handleSubmit}>Validate and continue</button>
        </div>
      </div>
    )
  }
}

export default CriteriaForm
