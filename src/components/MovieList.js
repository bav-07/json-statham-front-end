import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const movieComponents = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
    }).map(movie => {
        return <MovieCard movie={movie} key={movie.id}/>
    }) 
    
    return (  
        <>
        <div className=" flex justify-center w-screen">
            <form className="movieForm mt-70">
                <input className="searchBar"
                    onChange={handleChange}
                    value={searchTerm}
                    placeholder="Search by title or genre..."
                ></input> 
            </form>
            </div>
            {movieComponents}
       </>
    );
}
 
export default MovieList;