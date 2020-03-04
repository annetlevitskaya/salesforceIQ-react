import React from 'react';
import Already from './components/Already/Already';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Review from './components/Review/Review';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Already />
      <Header />
      <Navigation />
      <Content />
      <Review />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
