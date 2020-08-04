import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
// import Criteria from './components/elements/Criteria';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Ships from './components/pages/Ships';
import Loading from './components/pages/Loading';

class App extends Component {

  state = {
    customer: {
      customerName: '',
      customerEmail: '',
      customerMessage: '',
    },
    items: [
        {id: 1, img: 'static/assets/images/ships/air1.png', isSelected: false},
        {id: 2, img: 'static/assets/images/ships/air2.png', isSelected: false},
        {id: 3, img: 'static/assets/images/ships/air3.png', isSelected: false},
        {id: 4, img: 'static/assets/images/ships/aircraft-78060_1920.png', isSelected: false},
        {id: 5, img: 'static/assets/images/ships/discovery1.png', isSelected: false},
        {id: 6, img: 'static/assets/images/ships/eagle5.png', isSelected: false},
        {id: 7, img: 'static/assets/images/ships/millenium-falcon-1627322.png', isSelected: false},
    ]
  }

  markSelected = (id) => {
    console.log('mark selected id=', id);
    this.setState({ items: this.state.items.map( item => {
      if (item.id === id) {
          item.isSelected = !item.isSelected;
      }
      return item;
  }) });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={Loading} />
            <Route exact path="/home" render={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}/>
            <Route exact path="/ships" render={props => (
              <React.Fragment>
                <Ships items={this.state.items} markSelected={this.markSelected} />
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
