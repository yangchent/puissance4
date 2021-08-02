import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import Table from './components/Table';
import './index.css'
import audio from './asset/music/musicBackground.mp3'

class App extends React.Component {
  render() {
    
    // const Player = () => {(<AudioPlayer autoPlay src="https://stock.adobe.com/fr/search/audio?k=356984532" onPlay={e => console.log("onPlay")}/>)}
    
    
    return (
      <div className='container'>
      <div className="mainContent">
        {/* <ReactAudioPlayer src="./asset/music/musicBackground.ogg" autoPlay controls /> */}
        
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
        
            <AudioPlayer autoPlay src={audio} className='musicClass'/>
            </div>

    )

  }
}

export default App;
