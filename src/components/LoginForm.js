import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = ({setUser}) => {
    
    const navigate = useNavigate();



    const [inputUser, setInputUser] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        //if
        navigate("/");
    }

    
    return (  

        <>
            <form className="logInForm" onSubmit={handleFormSubmit}>
                <h2>Log In</h2>
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
            
        </>

    );
}
 
export default LoginForm;