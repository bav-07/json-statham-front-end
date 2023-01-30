import MovieCard from "./MovieCard";

const MovieList  = ({movies}) => {
   const movieComponents = movies.map(movie => {
    
    return <MovieCard 
            movie={movie}

            />


   }) 
    
    return (  
        <>
        {movieComponents}
        </>
    );
}
 
export default MovieList;