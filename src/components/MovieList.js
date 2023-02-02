import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const movieComponents = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
    }).map(movie => {
        return <MovieCard movie={movie} key={movie.id}/>
    }) 
    
    return (  
        <>
        <div className="grid flex-col justify-items-center w-screen h-[10vw]">
            {/* <h2 className=" justify-self-center p-50 self-center font-['Inter'] text-slate-100 font-extrabold text-7xl tracking-tighter">Search for movies.</h2> */}
            <form className="movieForm self-center">
                <input className="searchBar p-5 rounded-full w-[50vw] mt-[120px] drop-shadow-lg font-['Inter'] font-light"
                    onChange={handleChange}
                    value={searchTerm}
                    placeholder="Search by title or genre..."
                ></input> 
            </form>
        </div>
        <div className="mt-8 pl-52 flex overflow-x-scroll whitespace-nowrap">
            {movieComponents}
        </div>
        
       </>
    );
}
 
export default MovieList;