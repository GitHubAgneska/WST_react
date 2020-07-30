import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
// import Criteria from './components/elements/Criteria';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Ships from './components/pages/Ships';

class App extends Component {

  state = {
    customer: {
      customerName: '',
      customerEmail: '',
      customerMessage: '',
    },
    items: [
        {id: 1, img: 'static/assets/images/ships/air1.png'},
        {id: 2, img: 'static/assets/images/ships/air2.png'},
        {id: 3, img: 'static/assets/images/ships/air3.png'},
        {id: 4, img: 'static/assets/images/ships/aircraft-78060_1920.png'},
        {id: 5, img: 'static/assets/images/ships/discovery1.png'},
        {id: 5, img: 'static/assets/images/ships/eagle5.png'},
        {id: 5, img: 'static/assets/images/ships/millenium-falcon-1627322.png'},
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Ships items={this.state.items}/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}/>
            <Route exact path="/ships" render={props => (
              <React.Fragment>
                <Ships items={this.state.items}/>
              </React.Fragment>
            )}/>

          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
