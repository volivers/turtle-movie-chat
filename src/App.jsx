import React from 'react';
import './App.scss';
import { auth } from "./services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from './components/common/NavBar';
import SignIn from './components/authentication/SignIn';
import MoviesTable from './components/movies/MoviesTable';
import Footer from './components/common/Footer';

const App = () => {
  
  const [user] = useAuthState(auth);

  return (
    <main>
      <NavBar user={user} />
      <div className="list-wrapper">
        <h1>Best movies of all time</h1>
        {user ? <MoviesTable user={user} /> : <SignIn />}
      </div>
      <Footer />
    </main>
  );
}

export default App;