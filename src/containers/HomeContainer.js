import { useEffect, useState } from "react";

const HomeContainer = () => {

    const [movies, setMovies] = useState([])

    useEffect (() => {
        const fetchData = async () => {
            const response = await fetch ("https://localhost:8080/movies");
            const data = await response.json();
            setMovies(data)
        }
        fetchData()
    }, [])

    return (  
        <>
        </>
    );
}
 
export default HomeContainer;