import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const HomeContainer = () => {

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
        < MovieList
        movies={movies}
        
        />
        

        </>
    );
}
 
export default HomeContainer;