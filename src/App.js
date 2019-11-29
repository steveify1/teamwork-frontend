import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Auth from './container/Auth/Auth';
import './App.css';

// Configure Axios Defaults:: baseURL and Token
axios.defaults.baseURL = 'https://floating-lowlands-92074.herokuapp.com/api/v1';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Wraps the core app with authentication */}
        <Auth />
      </div>
    </BrowserRouter>
  );
}

export default App;
