import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Routes from './routes';

interface ComponentProps {
  children?: React.ReactNode;
}

function App() {
  return (
    <div className="App">
      <Layout header={<Header />}>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
