const Movie = ({movieData, averageRating}) => {
    
    return (  
        <>
            <img src={movieData.Poster} alt={`${movieData.Title} movie poster`}/> 
            <div className="textContent">
                <h2>{movieData.Title}</h2>
                <h3>{Math.round(averageRating*10)/10}/10</h3>
                <h4>{movieData.Year} | {movieData.Rated} | {movieData.Runtime} | {movieData.Genre}</h4>
                <h5 className="movieDirector">Directed by: {movieData.Director}</h5>
                <h5 className="movieWriter">Written by: {movieData.Writer}</h5>
                <p>{movieData.Plot}</p>
                <p><span className="awards">Awards: </span>{movieData.Awards}</p>
                <p><span className="boxOffice">Box Office: </span>{movieData.BoxOffice}</p>
            </div>
        </>
    ); 
}
 
export default Movie;