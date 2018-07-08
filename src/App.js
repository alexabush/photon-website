import React, { Component } from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Copy from './components/organisms/Copy';
import CTA from './components/organisms/CTA';
import ImgH2P from './components/organisms/ImgH2P';
import Footer from './components/organisms/Footer';

class App extends Component {
  state = {
    copyData: [
      {
        header: 'Landing',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit.A modi ab perspiciatis asperiores, dolorum tenetur aperiam, ducimus in nam at beatae.'
      },
      {
        header: 'Landing',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit.A modi ab perspiciatis asperiores, dolorum tenetur aperiam, ducimus in nam at beatae.'
      },
      {
        header: 'Landing',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit.A modi ab perspiciatis asperiores, dolorum tenetur aperiam, ducimus in nam at beatae.'
      }
    ]
  };
  render() {
    const copyLis = this.state.copyData.map(({ header, text }, idx) => {
      return <Copy key={idx} header={header} text={text} />;
    });
    return (
      <div className="App">
        <Header />
        <ImgH2P />
        <Copy />
        {/* <CTA /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
