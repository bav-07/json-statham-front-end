


const Review = ({review}) => {

    // console.log(review);
    return ( 
        <>
            <h3>{review.user.name}</h3>
            <h4>{review.rating}</h4>
            <p>{review.reviewBody}</p>
        </> 
    );
}
 
export default Review;

