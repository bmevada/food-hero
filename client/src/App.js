import './App.scss';
import React from 'react';
import Routing from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:4000"

function App() {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
