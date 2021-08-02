import React from 'react'
import './App.css';
import Table from './components/Table';

import casque from './asset/casque6.png'
import './index.css'

class App extends React.Component {
  render() {
    return (
        <div className="mainContent">
            {/* <img className="upImgTitle" src={casque} alt="" /> */}
            <h1 className="mainTitle">
              <span>3</span>
              <span>B</span>
              <span>i</span>
              <span>g</span>
              <span>B</span>
              <span>o</span>
              <span>y</span>
              <span>s</span>
              </h1>
                <Table />
            {/* </div> */}
            <p className="bottomLine">C'est à vous de jouer !!</p>
        </div>

    )

  }
}

export default App;
