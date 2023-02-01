import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = ({users, setUser}) => {
    
    const navigate = useNavigate();

    setUser("");


    const [logInFailed, setLogInFailed] = useState(false);

    //const [inputUser, setInputUser] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        // console.log(event.target.userName.value);
            
        
        if (users.map(user => user.name.toLowerCase()).includes(event.target.userName.value.toLowerCase())) {
            const loggedInUser = (users.find(user => user.name.toLowerCase() === event.target.userName.value.toLowerCase()))
            console.log(loggedInUser)
            setUser(loggedInUser);
            navigate("/");
        }
        else {
            setLogInFailed(true);
        }

    }

    
    return (  

        <>
            <form className="logInForm" onSubmit={handleFormSubmit}>
                <h2>Already have an account? Log in</h2>
                <input
                    type="text"
                    placeholder="Your name"
                    name="userName"
                    id="userName"
                    // onChange={handleChange}
                    // value={inputUser}
                />
                <button type="submit">Log In</button>
            </form>
            {logInFailed ? <p className="logInFailed">User name not recognised. Don't have an account? Sign up!</p> : ""}
        </>

    );
}
 
export default LoginForm;