import Review from "./Review";

const ReviewList = ({ reviews }) => {

    const reviewComponents = reviews.map(review => {
    return <Review review={review} />} )


    return (  
        <>
        {reviewComponents}
        </>
    );
}
 
export default ReviewList;