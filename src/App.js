import React from 'react'
import './App.css';
import Table from './components/Table';

import casque from './asset/casque6.png'

class App extends React.Component {
  render() {
    return (
        <div className="mainContent">
            <img className="upImgTitle" src={casque} alt="" />
            <h1 className="mainTitle">3BigBoys</h1>
                <Table />
            {/* </div> */}
            <p className="bottomLine">C'est a vous de jouer !!!!!!!!!!!!!!!</p>
        </div>

    )

  }
}

export default App;
