import React, { Component } from 'react'

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
            <>
            <h3>contact us</h3>
            <form>
                <input 
                    type="text" 
                    name="customerName"
                    placeholder="your name"
                    value={this.state.customerName}
                    onChange={this.onChange}
                    />
                <input 
                    type="text" 
                    name="customerEmail"
                    placeholder="your email"
                    value={this.state.customerEmail}
                    onChange={this.onChange}
                />
                <textarea
                    type="text" 
                    name="customerMessage"
                    placeholder="your message"
                    value={this.state.customerMessage}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="submit"
                />
            </form>
            </>
        )
    }
}

export default Form
