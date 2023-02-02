import Rating from '@mui/material/Rating'

const Movie = ({movieData, averageRating}) => {
    
    return (  
        <>
            <div className="flex flex-row justify-self-center justify-center mt-[120px] dark:text-white">
                <img className="mx-[15px] h-[500px] min-w-fit shadow-slate-700 dark:shadow-black shadow-xl" src={movieData.Poster} alt={`${movieData.Title} movie poster`}/> 
                <div className="textContent w-1/2 my-[10px]">
                    <h2 className="font-['Inter'] font-extrabold text-7xl dark:text-slate-200">{movieData.Title}</h2>
                    <div className='flex'>
                        <Rating name="star-rating" value={Math.round(averageRating*10)/10} precision={0.5} max={10} readOnly/>
                        <h3 className="font-['Inter'] font-bold inline-block mx-[5px]">{Math.round(averageRating*10)/10}/10</h3>
                    </div>
                    
                    <h4 className="font-['Inter'] text-blue-500"><span className="font-bold">{movieData.Year}</span> | {movieData.Rated} | <span className="font-bold">{movieData.Runtime}</span> | {movieData.Genre}</h4>
                    <h5 className="font-['Inter']"><span className="font-bold">Directed by: </span> {movieData.Director}</h5>
                    <h5 className="font-['Inter']"><span className="font-bold">Written by: </span> {movieData.Writer}</h5>
                    <p className="font-['Inter'] mt-3">{movieData.Plot}</p>
                    <p className="font-['Inter'] mt-3"><span className="awards font-bold">Awards: </span>{movieData.Awards}</p>
                    <p className="font-['Inter'] mt-3"><span className="boxOffice font-bold">Box Office: </span>{movieData.BoxOffice}</p>
                </div>
            </div>
            
        </>
    ); 
}
 
export default Movie;