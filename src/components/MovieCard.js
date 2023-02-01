import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    
    const [movieData, setMovieData] = useState({})

    useEffect (() => {
        if (movie) {
            // console.log("SECOND", selectedMovie);
            const fetchData = async () => {
                const response = await fetch (`http://www.omdbapi.com/?apikey=5b57696a&t=${movie.title}&y=${movie.year}`);
                const data = await response.json();
                // console.log(data);
                setMovieData(data);
            }
            fetchData()
        }
    }, [movie])
    
    return (  
        <>
        <div className="movieCard">
            <img src={movieData.Poster} alt={`${movieData.Title} movie poster`} className="cardImage"/> 
            <h4> {movie.title}</h4> 
            <p>{movie.genre}</p> 
            <p>{movie.duration}</p> 
            <p>{movie.year}</p> 

            <button>
                <Link to={`/movie/${movie.title}`}>More Info </Link>
            </button>
        </div>
        
       
        
        </>
    );
}
 
export default MovieCard;