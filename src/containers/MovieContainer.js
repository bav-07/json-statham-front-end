import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import ReviewList from "../components/ReviewsList";


const MovieContainer = ({movies}) => {

    const { id } = useParams() 
    //console.log(id);

    const movie = movies.find((movie) => {
        //const movieId = parseInt(id);
        //console.log(movie.title);
        return movie.title === id;
    });
    //console.log(movie);

    const [reviews, setReviews] = useState([])
    
    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch (`http://localhost:8080/reviews/?movieTitle=${movie.title}`);
            const data = await response.json();
            setReviews(data)    
        }
        fetchData()
    }, [])

    const [movieData, setMovieData] = useState({})

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch (`http://www.omdbapi.com/?apikey=5b57696a&t=${movie.title}&y=${movie.year}`);
            const data = await response.json();
            console.log(data);
            setMovieData(data);
        }
        fetchData()
    }, [])
    
    console.log(movieData);

    // Find average rating for movie based on review scores
    const averageRating = reviews.reduce((accumulator, currentReview) => accumulator + currentReview.rating, 0) / reviews.length;
    console.log(averageRating);

    return (
        <>
            <div>
                {/* <h2>{movie.title}</h2> */}
                <Movie movieData={movieData} averageRating={averageRating} />
                <ReviewList reviews={reviews} />
            </div>
        </>
      );
}
 
export default MovieContainer;