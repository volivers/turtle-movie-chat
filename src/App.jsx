import React from 'react';
import './App.scss';
import NavBar from './components/common/NavBar';
import MoviesTable from './components/movies/MoviesTable';
import Footer from './components/common/Footer';

const App = () => {

  return (
    <main>
      <NavBar />
      <div className="list-wrapper">
        <h1>Best movies of all time</h1>
        <MoviesTable />
      </div>
      <Footer />
    </main>
  );
}

export default App;