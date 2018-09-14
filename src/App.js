import React, { Component } from 'react';
import './App.css';
import SelectorComuna from './SelectorComuna';
import Farmacias from './Farmacias';

class App extends Component {
  state = {
    comuna: 1
  }
  cambioComuna = comunaElegida => {
    this.setState({
      comuna: comunaElegida
    })
  }
  render() {
    return (<React.Fragment>
    <nav className="navbar bg-dark" style={{color: 'white'}}>
      <div className="container">
        <a className="navbar-brand  mb-0 h1 " href="#" >Farmacomuna </a>
      </div>
    </nav>
    <main>
      <SelectorComuna onChangeComuna={this.cambioComuna} />
      <Farmacias comuna={this.state.comuna} />
    </main>
      </React.Fragment>
      
    );
  }
}

export default App;
