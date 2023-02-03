import Review from "./Review";

const ReviewList = ({ reviews }) => {

    const reviewComponents = reviews.map(review => {
    return <Review review={review} />} ).reverse()


    return (  
        <div  className="w-[50vw] min-w-[700px] m-auto mt-[50px] mb-[70px]">
            {reviewComponents}
        </div>
    );
}
 
export default ReviewList;