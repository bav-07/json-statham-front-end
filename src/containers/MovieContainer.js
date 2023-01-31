import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import ReviewList from "../components/ReviewsList";
import ReviewForm from "../components/ReviewForm";


const MovieContainer = ({movies}) => {

    const { id } = useParams();
    //console.log(id);

    const [selectedMovie, setSelectedMovie] = useState("");

    useEffect(() => {
        const movie = movies.find((movie) => {
            return movie.title === id;
        });
        console.log("HI", movie)
        setSelectedMovie(movie);
    }, [movies, id])

    
    //console.log(movie);

    const [reviews, setReviews] = useState([])
    
    useEffect (() => {
        if (selectedMovie) {
            console.log("FIRST", selectedMovie);
            const fetchData = async () => {
                const response = await fetch (`http://localhost:8080/reviews/?movieTitle=${selectedMovie.title}`);
                const data = await response.json();
                setReviews(data)    
            }
            fetchData()
        }
    }, [selectedMovie])

    const [movieData, setMovieData] = useState({})

    useEffect (() => {
        if (selectedMovie) {
            console.log("SECOND", selectedMovie);
            const fetchData = async () => {
                const response = await fetch (`http://www.omdbapi.com/?apikey=5b57696a&t=${selectedMovie.title}&y=${selectedMovie.year}`);
                const data = await response.json();
                console.log(data);
                setMovieData(data);
            }
            fetchData()
        }
    }, [selectedMovie])
    
    console.log(movieData);

    // Find average rating for movie based on review scores
    const averageRating = reviews.reduce((accumulator, currentReview) => accumulator + currentReview.rating, 0) / reviews.length;
    console.log(averageRating);

    return (
        <>
            <div>
                {selectedMovie ? <>
                    <Movie movieData={movieData} averageRating={averageRating} />
                    <ReviewList reviews={reviews} />
                </>
                : ""}
                {/* <h2>{movie.title}</h2> */}
                
            </div>
        </>
      );
}
 
export default MovieContainer;