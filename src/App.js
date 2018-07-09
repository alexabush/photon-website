import React, { Component } from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Copy from './components/organisms/Copy';
import CTA from './components/organisms/CTA';
import ImgH2P from './components/organisms/ImgH2P';
import Footer from './components/organisms/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImgH2P />
        <Copy />
        <CTA />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
