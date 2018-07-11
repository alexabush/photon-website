import React, { Component } from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Copy from './components/organisms/Copy';
import CTA from './components/organisms/CTA';
import ImgH2P from './components/organisms/ImgH2P';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import Sample from './components/organisms/Sample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImgH2P />
        <Copy />
        <CTA />
        <Contact />
        <Footer />
        <Sample />
      </div>
    );
  }
}

export default App;
