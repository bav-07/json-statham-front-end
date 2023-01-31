import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import LeaderboardContainer from './containers/LeaderboardContainer';
import LoginContainer from './containers/LoginContainer';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState({});

  // TEsTN
  useEffect (() => {
    const fetchData = async () => {
        const response = await fetch (`http://localhost:8080/users/?name=John`);
        const data = await response.json();
        console.log(data)
        setUser(data[0])    
    }
    fetchData()
  }, [])

  return (
    <BrowserRouter>
      <header>
        <h1>DefinitelyNotIMDB</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </header>
      <div>
        <Routes>
          <Route path="*" element={<HomeContainer user={user} />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/leaderboard" element={<LeaderboardContainer />} />
          <Route path="/login" element={<LoginContainer setUser={setUser}/>} />
        </Routes>
      </div>
      <footer>

      </footer>
    </BrowserRouter>
  );
}

export default App;
