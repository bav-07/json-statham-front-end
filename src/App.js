import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import LeaderboardContainer from './containers/LeaderboardContainer';
import LoginContainer from './containers/LoginContainer';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState("");

  // TEsTN
  // useEffect (() => {
  //   const fetchData = async () => {
  //       const response = await fetch (`http://localhost:8080/users/?name=John`);
  //       const data = await response.json();
  //       console.log(data)
  //       setUser(data[0])    
  //   }
  //   fetchData()
  // }, [])

  const [users, setUsers] = useState([])


  const fetchUserData = async () => {
            const response = await fetch ("http://localhost:8080/users");
            const data = await response.json();
            console.log(data);
            setUsers(data)
        }

  useEffect (() => {
      
      fetchUserData()
  }, [user])

  return (
    <BrowserRouter>
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-cyan-1200 to-cyan-400 bg-grid-slate-200/[0.04]">
      <header className="flex flex-row  " >
        <h1 className="text-3xl font-bold underline bg-cyan-400 w-min p-2 m-5 rounded-lg font-extrabold font:inherit">NotIMDb</h1>
        <button className="m-4 p-2 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
  <span className="block text-black px-5 py-5 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">Follow Me</span>
</button>
        {user !== "" ? <h3>Welcome, {user.name}!</h3> : <h3></h3>}
        <ul className="flex flex-row">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          {/* <li><Link to="/login">{user !== "" ? <p>Logout</p> : <p>Login</p>}</Link></li> */}
          <li>{user === "" ? <Link to="/login">Login/Sign-up</Link> : <Link to="/login">Logout</Link>}</li>
          <li>{user === "" ? <p>Not logged in</p> : <p>User: {user.name}</p>}</li>
        </ul>
      </header>
      <div>
        <Routes>
          <Route path="*" element={<HomeContainer user={user} fetchUserData={fetchUserData}/>} />
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
