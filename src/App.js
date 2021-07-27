import React from 'react'
import './App.css';
import Table from './components/Table';

class App extends React.Component {
  render() {
    return (
        <div>
            <h1 className="mainTitle">3bigBoys</h1>
            <div className="div">
                <Table />
            </div>
            <p className="mainTitle">C'est a vous de jouer !!!!!!!!!!!!!!!</p>
        </div>

    )

  }
}

export default App;
