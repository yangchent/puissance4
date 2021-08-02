import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './App.css';
import Table from './components/Table';
import './index.css'
import audio from './asset/music/musicBackground.mp3'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
          <div className="mainContent">
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
              <p className="bottomLine">C'est à vous de jouer !</p>
          </div>
          <AudioPlayer autoPlay src={audio} className='musicClass'/>
      </div>
    )
  }
}

export default App;
