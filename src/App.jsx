import React from 'react';
import './App.scss';
import NavBar from './components/common/NavBar';
import MoviesList from './components/MoviesList';
import Footer from './components/common/Footer';

const App = () => {

  return (
    <main>
      <NavBar />
      <div className="list-wrapper">
        <h1>Best movies of all time</h1>
        <MoviesList />
      </div>
      <Footer />
    </main>
  );
}

export default App;