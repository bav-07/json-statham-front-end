import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating'

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

    let averageRating
    if (movie.reviews.length !== 0) {
        averageRating = movie.reviews.reduce((accumulator, currentReview) => accumulator + currentReview.rating, 0) / movie.reviews.length;
    }
    else {
        averageRating = 0;
    }
    
    return (  
        <>
        <Link to={`/movie/${movie.title}`}>
        <div className="movieCard rounded-3xl h-screen w-[15vw] relative mx-[20px]">
            <div className="h-min group">
            <img className="cardImage  w-full object-cover hover:shadow-black shadow-2xl transition-all" src={movieData.Poster} alt={`${movie.title} movie poster`}/> 
            
            <div className="absolute w-[fit] transition-all top-0 p-5 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-black via-gray-900 h-[18%]">
                <h4 className="text-white font-bold font-['Roboto']"> {movie.title}</h4> 
                <p className="text-cyan-600 font-light font-['Roboto']">{movie.genre}</p>
                <Rating name="star-rating" size="small" value={Math.round(averageRating*10)/10} precision={0.5} max={10} readOnly/>

            </div>
            </div>
            {/* <p>{movie.duration}</p> 
            <p>{movie.year}</p> */}
            {/* <p className="text-white bg-cyan-600 w-[60px] h-[60px] text-center text-3xl font-extrabold rounded-full p-[10px]">{(Math.round(averageRating*10)/10)}</p>  */}

            
        </div>
        </Link>
        
       
        
        </>
    );
}
 
export default MovieCard;