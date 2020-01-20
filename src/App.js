import React from 'react';
import {HomePageContainer} from "./components/home/HomePageContainer";
import 'normalize.css';
import './components/global-styles.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nav will be here</p>
        <HomePageContainer/>
      </header>
    </div>
  );
}

export default App;
