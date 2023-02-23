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
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';


function App() {

  const [user, setUser] = useState("");
  const [users, setUsers] = useState([])
  const [darkMode, setDarkMode] = useState("dark");
  const [checked, setChecked] = React.useState(true);
  const [isDesktop, setDesktop] = useState(true);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1000) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    }

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);

  }, []);

  const hamburgerClick = () => {
    setShowLinks(showLinks ? false : true);
  }
  
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
    <div className='bg-heroLite dark:bg-hero bg-cover bg-fixed justify-center min-h-screen'>
      <header className="flex flex-row border-b-[1px] border-white/30 justify-around self-center fixed w-full top-0 backdrop-blur z-50" >
        
        <Link to="/"><h1 className="text-3xl bg-gradient-to-r from-blue-400 to-cyan-400 p-2 m-5 rounded-lg font-extrabold font-['Anton'] text-slate-900 tracking-wide">notIMDb</h1></Link>
        <ul className="flex flex-row items-center text-blue-500 dark:text-white justify-self-center justify-around font-['Inter'] font-light">
          
          {isDesktop ? (
            <div className='flex justify-evenly w-[50vw]'>
            <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1"><Link to="/movies">Movies</Link></li>
            <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1"><Link to="/leaderboard">Leaderboard</Link></li>
           
            <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1">{user === "" ? <Link to="/login">Login/Sign-up</Link> : <Link to="/login">Logout</Link>}</li>
            <li className="transition-all font-extrabold hover:cursor underline-offset-4 decoration-1">{user === "" ? <p>Not logged in</p> : <p className='flex gap-2'><AccountCircleIcon/> {user.name}</p>}</li>
            </div>
          ) : (
            <div className='relative'>
              <div onClick={() => hamburgerClick()} className='hover:cursor-pointer group hover:bg-slate-100/20 rounded-full p-2 transition-all duration-150'>
                <MenuIcon className='group-hover:scale-105 transition-all duration-1000'/>
              </div>
            {
              showLinks ? 
              <div className='absolute right-0 text-right backdrop-brightness-50 bg-gradient-to-r from-white/80 via-cyan-100/80 to-teal-100/80 dark:from-blue-900/80 dark:via-cyan-900/80 dark:to-teal-900/80 p-3 gap-2 flex flex-col w-max rounded-md z-50'>
                <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1"><Link onClick={() => setShowLinks(false)} to="/movies">Movies</Link></li>
                <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1"><Link onClick={() => setShowLinks(false)} to="/leaderboard">Leaderboard</Link></li>
              
                <li className="transition-all hover:text-cyan-400 font-medium hover:underline underline-offset-4 decoration-1">{user === "" ? <Link  onClick={() => setShowLinks(false)} to="/login">Login/Sign-up</Link> : <Link onClick={() => setShowLinks(false)} to="/login">Logout</Link>}</li>
                <li className="transition-all font-extrabold hover:cursor underline-offset-4 decoration-1">{user === "" ? <p>Not logged in</p> : <p className='flex gap-2'><AccountCircleIcon/> {user.name}</p>}</li>
            
              </div> : <></>
            }
            </div>
            )
            
          }  
          
          <Switch
            checked={checked}
            onChange={handleThemeSwitch}
            inputProps={{ 'aria-label': 'controlled' }}
          />

      </ul>
      
      </header>
      <div className='relative flex flex-col flex-grow'>
        <Routes>
          <Route path="/" element={<Video />} />
          {/* <Route path="/popular" element={<HomeContainer user={user} fetchUserData={fetchUserData}/>} > */}
            {/* <Routes> */}
                <Route path="/movies" element={< MovieList movies={movies} />} />
                <Route path="/movie/:id" element={<MovieContainer movies={movies} user={user} fetchUserData={fetchUserData} fetchMovieData={fetchMovieData}/>} />
            {/* </Routes> */}
          {/* </Routes></Route> */}
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/leaderboard" element={<LeaderboardContainer users={users} darkMode={darkMode}/>} />
          <Route path="/login" element={<LoginContainer users={users} setUser={setUser} setUsers={setUsers}/>} />
        </Routes>
      </div>
      {/* <footer> */}
      <footer class="fixed mt-auto bottom-0 backdrop-blur w-full p-4 bg-white/80 shadow flex items-center justify-between md:p-6 dark:bg-gray-800/50">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">NotIMDb™.</a>  Credits to RunTime Terror.
        </span>
        <ul class="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <div className='flex'>
          <li>
            <a href="/movies" class="mr-4 hover:underline md:mr-6 ">Movies</a>
          </li>
          <li>
              <a href="/leaderboard" class="mr-4 hover:underline md:mr-6">Leaderboard</a>
          </li>
          {/* <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li> */}
          <li>
              <a href="#" class="hover:underline"></a>
          </li>
          </div>
          <div>
            <GitHubIcon/>
            <InstagramIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
          </div>
          
        
        </ul>
      </footer>
      {/* </footer> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
