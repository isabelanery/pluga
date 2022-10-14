import React from 'react';
import ListAllTools from './components/ListAllTools';
import Provider from './context/Provider';
import './App.css';
import Modal from './components/Modal';

function App() {
  return (
    <div className="app">
      <Provider>
        <ListAllTools />
        <Modal />
      </Provider>
    </div>
  );
}

export default App;
