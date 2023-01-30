import { useState, useEffect } from "react";


const MovieContainer = () => {

    const [reviews, setReviews] = useState([])
    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch ("http://localhost:8080/reviews");
            const data = await response.json();
            setReviews(data)
            //console.log(data)
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