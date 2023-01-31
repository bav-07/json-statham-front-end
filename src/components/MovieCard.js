import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    return (  
        <>
        <h4> {movie.title}</h4> 
        <p>{movie.genre}</p> 
        <p>{movie.duration}</p> 
        <p>{movie.year}</p> 

        <button>
            <Link to={`/movie/${movie.title}`}>More Info </Link>
        </button>
       
        
        </>
    );
}
 
export default MovieCard;