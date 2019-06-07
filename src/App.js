import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'
import Product from './components/Product'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Form />
      <Product />
    </div>
  );
}

export default App;
