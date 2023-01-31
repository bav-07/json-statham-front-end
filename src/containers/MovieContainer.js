import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import ReviewList from "../components/ReviewsList";
import ReviewForm from "../components/ReviewForm";


const MovieContainer = ({movies, user}) => {

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
    }, [movie.title])

    const postReview = async (newReview) => {
        const response = await fetch("http://localhost:8080/reviews", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
        })
        const savedReview = await response.json()
        setReviews([...reviews, savedReview])
    }

    const [movieData, setMovieData] = useState({})

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch (`http://www.omdbapi.com/?apikey=5b57696a&t=${movie.title}&y=${movie.year}`);
            const data = await response.json();
            console.log(data);
            setMovieData(data);
        }
        fetchData()
    }, [movie.title, movie.year])
    
    console.log(movieData);

    // Find average rating for movie based on review scores
    const averageRating = reviews.reduce((accumulator, currentReview) => accumulator + currentReview.rating, 0) / reviews.length;
    console.log(averageRating);

    return (
        <>
            <div>
                {/* <h2>{movie.title}</h2> */}
                <Movie movieData={movieData} averageRating={averageRating} />
                <ReviewForm movie={movie} postReview={postReview} user={user} />
                {/* add user as a prop into ReviewList */}
                <ReviewList reviews={reviews}  />
            </div>
        </>
      );
}
 
export default MovieContainer;
