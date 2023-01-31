const UserCard = ({user}) => {

    const reviewComponents = user.reviews.map(review => {
        return (
            <div className="reviewByUser" key={review.id}>
                <h4>{review.movie.title}</h4>
                <p>{review.reviewBody}</p>
                <h4>{review.rating / 2}</h4>
            </div>
        )
    })

    return (  
        <div className="userCard">
            <h3>{user.name}</h3>
            <p>CryptoPoints: {user.runTimeTerrorCrypto}</p>
            {reviewComponents}
        </div>
    );
}
 
export default UserCard;