import React, { Component } from 'react';
import './contact-form.css';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            customerName: '',
            customerEmail: '',
            customerMessage: '',
        }
    }

    onChange = input => e => {
        this.setState({ [input]: e.target.value });
    };


    render() {
        return (
            <div className="contactForm-container">
            <h3>contact us</h3>
            <form>
                <input 
                    type="text" 
                    name="customerName"
                    placeholder="name"
                    value={this.state.customerName}
                    onChange={this.onChange}
                    />
                <input 
                    type="text" 
                    name="customerEmail"
                    placeholder="email"
                    value={this.state.customerEmail}
                    onChange={this.onChange}
                />
                <textarea
                    type="text" 
                    name="customerMessage"
                    placeholder="message"
                    value={this.state.customerMessage}
                    onChange={this.onChange}
                />
                <input className="button"
                    type="submit" 
                    value="submit"
                />
            </form>
            </div>
        )
    }
}

export default Form
