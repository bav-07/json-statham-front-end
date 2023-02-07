
# notIMDb -  React to movies. State your opinions.

<p>

## Project Description
The backend API we recieved was the movie review API by RunTime Terror https://github.com/bav-07/json-statham-back-end.

not IMDb allows registered users to review a variety of movies. Users can get movies by name and genre, display reviews by movie and users using the filter function. We have implemented a leaderboard feature where users can gain points depending on the number of reviews they post. 

</p>

## Insallation Instructions

1. Clone the back-end Repo: https://github.com/bav-07/json-statham-back-end.
2. Run the back-end using the IntelliJ IDE - the server port should configure to 8080 by default.
3. Make sure to create a Postgres database called "movie_reviews_db"
4. Clone the front-end Repo: https://github.com/bav-07/json-statham-front-end.
5. Once the front-end project is opened using VS Code, run `npm install` in the terminal to install the required node modules.
6. Run the front-end application using `npm start` - this should run the application on localhost:3000.

## Libraries 
We utilised some external libaries to help us design our website.
- Material-Ui : https://mui.com/
- Tailwind CSS: https://tailwindcss.com/

## Wireframe 


<img width="1032" alt="Screenshot 2023-02-05 at 12 34 35" src="https://user-images.githubusercontent.com/60015635/216818934-0d4e151b-2b7e-43f7-a7c6-addf58476f9f.png">

## Component diagram 


<img width="706" alt="Screenshot 2023-02-05 at 12 41 08" src="https://user-images.githubusercontent.com/60015635/216819215-3ef49e67-9c13-4e98-b320-827c62d5714f.png">

## MVP

- Display a list of all movies
- Get movies by genre
- Get movies by name
- Display a list of all users
- Display a list of reviews by movie
- Display a list of reviews by users
- Add a review

## Implemented Extensions 

- Filter reviews by rating for a specific movie
- A login form, for adding a new user 
- Dark Mode Toggle
- Average Rating for Movie

## Further Extensions 

- Delete Users/Reviews
- Making the website mobile friendly 
- Cleaner use of states
- Adding an interactive movie quiz
