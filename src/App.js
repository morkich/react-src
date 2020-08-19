import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom';
import Content from './components/Content/Content';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrap_main">
        <header className="header">
          <Header />
        </header>
        <div className="content">
          <Content />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;