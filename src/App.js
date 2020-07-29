import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
// import Criteria from './components/elements/Criteria';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


class App extends Component {

  state = {
    customer: {
      customerName: '',
      customerEmail: '',
      customerMessage: '',
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Home />
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
