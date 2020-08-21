import React from 'react';
import './App.css';
import Navi from './components/Navi';
import Main from './components/Main';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';

function App() {
  return (
    <div>
      <Navi/>
      <Main/>
      <LeftContent/>
      <RightContent/>
    </div>
  );
}

export default App;
