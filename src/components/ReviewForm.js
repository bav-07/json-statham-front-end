import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const ReviewForm = ({movie, postReview, user}) => {
    
    const [rating, setRating] = React.useState(0);



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
        <div className="mx-auto mt-[40px] w-[50vw]">
            <form onSubmit={handleFormSubmit}>
                <h3 className="font-['Inter'] font-extrabold tracking-tight dark:text-white text-3xl">Add a review</h3>
                <div className="flex">
                <label className="font-['Inter'] font-medium dark:text-white text-xl mr-2" htmlFor="rating">Rating: </label>
                
                <Rating
                    name="rating"
                    max={10}
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                        let copiedReview = {...stateReview};
                        copiedReview["rating"] = newValue;
                        setStateReview(copiedReview);
                    }}
                />
                </div>
                <textarea
                    className="mt-2 bg-slate-900/0 dark:text-white p-2.5 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 border border-gray-400"
                    type="text"
                    rows="3"
                    placeholder="Tell us more..."
                    name="reviewBody"
                    id="reviewBody"
                    onChange={handleChange}
                    value={stateReview.reviewBody}
                />

                <Button variant="contained" type="submit" className="w-full max-w-[300px] align-middle">GO</Button>

            </form>
        </div>
    );
}
 
export default ReviewForm;