

const MovieCard = ({movie}) => {
    return (  
        <>
     <h4> {movie.title}</h4> 
     <p>{movie.genre}</p> 
     <p>{movie.duration}</p> 
     <p>{movie.year}</p> 
    
       
        
        </>
    );
}
 
export default MovieCard;