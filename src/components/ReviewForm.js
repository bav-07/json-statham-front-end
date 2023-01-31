import { useState } from "react";

const ReviewForm = ({movie, postReview, user}) => {
    
    const [stateReview, setStateReview] = useState(
        {
            "rating": 0,
            "reviewBody": "",
            "movie": {
                "id": movie.id
            },
            "user": {
                "id": user.id
            }
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;

        let copiedReview = {...stateReview};
        copiedReview[propertyName] = event.target.value;
        setStateReview(copiedReview);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postReview(stateReview);
    }
    
    return (  
        <>
            <form onSubmit={handleFormSubmit}>
                <h3>Add a review</h3>
                <label for="rating">Rating: </label>
                <input
                    type="number"
                    name="rating"
                    id="rating"
                    min="0"
                    max="10"
                    step="1"
                    onChange={handleChange}
                    value={stateReview.rating}
                    required/>

                <input
                    type="text"
                    placeholder="Tell us more..."
                    name="reviewBody"
                    id="reviewBody"
                    onChange={handleChange}
                    value={stateReview.reviewBody}
                />

                <button type="submit">Go</button>
            </form>
        </>
    );
}
 
export default ReviewForm;