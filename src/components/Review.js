import Rating from '@mui/material/Rating'

const Review = ({review}) => {

    // console.log(review);
    return ( 
        <div className="bg-gradient-to-t dark:from-slate-700/0 dark:via-slate-600/15 dark:to-slate-500/20 from-pink-700/0 via-blue-300/20 to-cyan-500/10 p-7 my-5 rounded-2xl dark:text-white shadow-xl">
            <h3 className="font-bold font-['Inter'] ml-1 text-2xl">{review.user.name}</h3>
            <div className='flex'>
                <Rating name="star-rating" value={review.rating} precision={0.5} max={10} readOnly/>
                <h4 className="font-bold font-['Inter'] ml-1 inline-block">{review.rating}/10</h4>
            </div>
            <p className="font-light font-['Inter'] ml-1">{review.reviewBody}</p>
        </div> 
    );
}
 
export default Review;

