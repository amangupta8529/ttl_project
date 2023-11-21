// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Profile />
      <Content/>
    </div>
  );
}

export default App;
