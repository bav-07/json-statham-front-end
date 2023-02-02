import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import MovieContainer from './containers/MovieContainer';
import MovieList from './components/MovieList';
import AboutContainer from './containers/AboutContainer';
import LeaderboardContainer from './containers/LeaderboardContainer';
import LoginContainer from './containers/LoginContainer';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Switch from '@mui/material/Switch';
import Video from './containers/Video';


function App() {

  const [user, setUser] = useState("");
  const [users, setUsers] = useState([])
  const [darkMode, setDarkMode] = useState("dark");
  const [checked, setChecked] = React.useState(true);
  
  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleThemeSwitch = (event) => {
    setChecked(event.target.checked)
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  const fetchUserData = async () => {
            const response = await fetch ("http://localhost:8080/users");
            const data = await response.json();
            console.log(data);
            setUsers(data)
        }

  useEffect (() => {
      fetchUserData()
  }, [user])

  const [movies, setMovies] = useState([])

  const fetchMovieData = async () => {
      const response = await fetch ("http://localhost:8080/movies");
      const data = await response.json();
      setMovies(data)
  }

  useEffect (() => {
      fetchMovieData()
  }, [])


  return (

    <BrowserRouter>
    <div className='bg-heroLite dark:bg-hero bg-cover bg-fixed justify-center'>
      <header className="flex flex-row border-b-[1px] border-white/30 justify-around self-center sticky top-0 backdrop-blur z-50" >
        
        <Link to="/"><h1 className="text-3xl bg-gradient-to-r from-blue-400 to-cyan-400 p-2 m-5 rounded-lg font-extrabold font-['Anton'] text-slate-900 tracking-wide">notIMDb</h1></Link>
        {/* {user !== "" ? <h3>Welcome, {user.name}!</h3> : <h3></h3>} */}
        <ul className="flex flex-row items-center text-white justify-self-center justify-around w-1/2 font-['Inter'] font-light">
          
            
          <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1"><Link to="/popular">Popular</Link></li>
          <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1"><Link to="/about">About</Link></li>
          <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1"><Link to="/leaderboard">Leaderboard</Link></li>
         
        {/* </ul>
          
        <ul className="flex flex-row items-center text-white justify-self-end justify-between w-2/12 pr-10 font-['Roboto'] font-light"> */}
        
          {/* <li><Link to="/login">{user !== "" ? <p>Logout</p> : <p>Login</p>}</Link></li> */}
          <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1">{user === "" ? <Link to="/login">Login/Sign-up</Link> : <Link to="/login">Logout</Link>}</li>
          <li className="transition-all hover:text-cyan-400 font-extrabold hover:cursor underline-offset-4 decoration-1">{user === "" ? <p>Not logged in</p> : <p>User: {user.name}</p>}</li>
          <Switch
            checked={checked}
            onChange={handleThemeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />

      </ul>
      
      </header>
      <div className='relative'>
        <Routes>
          <Route path="/" element={<Video />} />
          {/* <Route path="/popular" element={<HomeContainer user={user} fetchUserData={fetchUserData}/>} > */}
            {/* <Routes> */}
                <Route path="/popular" element={< MovieList movies={movies} />} />
                <Route path="/movie/:id" element={<MovieContainer movies={movies} user={user} fetchUserData={fetchUserData} fetchMovieData={fetchMovieData}/>} />
            {/* </Routes> */}
          {/* </Routes></Route> */}
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/leaderboard" element={<LeaderboardContainer users={users}/>} />
          <Route path="/login" element={<LoginContainer users={users} setUser={setUser} setUsers={setUsers}/>} />
        </Routes>
      </div>
      <footer>

      </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
