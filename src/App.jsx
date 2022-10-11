import React from 'react';
import ListAllTools from './components/ListAllTools';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <div className="app">
      <Provider>
        <ListAllTools />
      </Provider>
    </div>
  );
}

export default App;
