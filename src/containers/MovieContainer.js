import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import ReviewList from "../components/ReviewsList";
import ReviewForm from "../components/ReviewForm";


const MovieContainer = ({movies, user, fetchUserData, fetchMovieData}) => {

    const { id } = useParams();
    //console.log(id);

    const [selectedMovie, setSelectedMovie] = useState("");

    useEffect(() => {
        const movie = movies.find((movie) => {
            return movie.title === id;
        });
        // console.log("HI", movie)
        setSelectedMovie(movie);
    }, [movies, id])

    
    //console.log(movie);

    const [reviews, setReviews] = useState([])
    
    useEffect (() => {
        if (selectedMovie) {
            // console.log("FIRST", selectedMovie);
            const fetchData = async () => {
                const response = await fetch (`http://localhost:8080/reviews/?movieTitle=${selectedMovie.title}`);
                const data = await response.json();
                setReviews(data)    
            }
            fetchData()
        }
    }, [selectedMovie, user, reviews])

    const [movieData, setMovieData] = useState({})

    useEffect (() => {
        if (selectedMovie) {
            // console.log("SECOND", selectedMovie);
            const fetchData = async () => {
                const response = await fetch (`http://www.omdbapi.com/?apikey=5b57696a&t=${selectedMovie.title}&y=${selectedMovie.year}`);
                const data = await response.json();
                console.log(data);
                setMovieData(data);
            }
            fetchData()
        }
    }, [selectedMovie])
    
    // console.log(movieData);

    const postReview = async (newReview) => {
        const response = await fetch("http://localhost:8080/reviews", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
        })
        const savedReview = await response.json()
        setReviews([...reviews, savedReview])
        fetchUserData()
        fetchMovieData()
    }


    // Find average rating for movie based on review scores
    let averageRating
    if (reviews.length !== 0) {
        averageRating = reviews.reduce((accumulator, currentReview) => accumulator + currentReview.rating, 0) / reviews.length;
    }
    else {
        averageRating = 0;
    }
    // console.log(averageRating);

    return (
        <>
            <div>
                {selectedMovie ? <>
                    <Movie movieData={movieData} averageRating={averageRating} />
                    {user !== "" ? <ReviewForm movie={selectedMovie} postReview={postReview} user={user}/> : <h3>You must be logged in to leave a review.</h3>}
                    <ReviewList reviews={reviews} />
                </>
                : ""}
                {/* <h2>{movie.title}</h2> */}
                
            </div>
        </>
      );
}
 
export default MovieContainer;