import { useState, useEffect } from "react";


const MovieContainer = ({movie}) => {

    const [reviews, setReviews] = useState([])
    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch ("http://localhost:8080/reviews");
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
            setMovieData(data)
    
            
        }
        fetchData()
    }, [])


    
    
    
    
    return (
        <>
        <div>
            <h2>What's on?</h2>
        </div>
        </>
      );
}
 
export default MovieContainer;