import React from 'react';
import { BrowserRouter, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Routes from './routes'
import Header from './components/Header'

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
)

export default App;
