import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { Route, Routes } from "react-router-dom";
import MovieContainer from "./MovieContainer";

const HomeContainer = ({user, fetchUserData}) => {

    const [movies, setMovies] = useState([])

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch ("http://localhost:8080/movies");
            const data = await response.json();
            setMovies(data)
        }
        fetchData()
    }, [])

    return (  
        <>
            <Routes>
                <Route path="/" element={< MovieList movies={movies} />} />
                <Route path="/movie/:id" element={<MovieContainer movies={movies} user={user} fetchUserData={fetchUserData}/>} />
            </Routes>
        </>
    );
}
 
export default HomeContainer;