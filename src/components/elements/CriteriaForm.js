import React, { Component } from 'react'
import './criteria-form.css';

export class CriteriaForm extends Component {

  constructor(props) {
    super(props);
    this.state= { 
        date: '',
        distance: 0,
        budget: 0,
    }
  }

  onChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


  render() {
    return (
      <div className="content">
        <div className="criteriaForm-container">
          <form>
                <input 
                    type="date" 
                    name="date"
                    placeholder="your dates"
                    value={this.state.date}
                    onChange={this.onChange}
                    />
                <select name="distance" id="distance" form="distance" value={this.state.distance} onChange={this.onChange}>
                  <option value="distance1">1000-2000 parsecs</option>
                  <option value="distance2">2000-3000 parsecs</option>
                  <option value="distance3">4000-5000 parsecs</option>
                  <option value="distance4">6000 + parsecs</option>
                </select>
                <select name="budget" id="budget" form="budget" value={this.state.budget} onChange={this.onChange}>
                  <option value="budget1"> less than 500 units</option>
                  <option value="budget2">500 to 1000 units</option>
                  <option value="budget3">1000 to 1500 units</option>
                  <option value="budget4">1500 units and more</option>
              </select>
            </form>
        </div>
        <div className="btn-container">
          <button className="validate-btn">Validate and continue</button>
        </div>
      </div>
    )
  }
}

export default CriteriaForm
