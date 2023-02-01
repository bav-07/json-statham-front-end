import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignUpForm = ({users, setUser, setUsers}) => {

    const navigate = useNavigate();

    const [signUpFailed, setSignUpFailed] = useState(false);

    const [stateUser, setStateUser] = useState(
        {
            "name": ""
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;

        let copiedUser = {...stateUser};
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser);
    }

    const postUser = async (newUser) => {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        const savedUser = await response.json()
        setUsers([...users, savedUser])
        setUser(savedUser)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.userName.value);
        
        if (users.map(user => user.name.toLowerCase()).includes(event.target.name.value.toLowerCase())) {
            setSignUpFailed(true);
        }
        else {
            postUser(stateUser);
            navigate("/");
        }

    }

    return (  
        <>
            <form className="signUpForm" onSubmit={handleFormSubmit}>
                <h2>Sign up to react to your favourite movies and state your opinion</h2>
                <input
                    type="text"
                    placeholder="What's your name?"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={stateUser.name}
                />
                <button type="submit">Log In</button>
            </form>
            {signUpFailed ? <p className="logInFailed">An account with this name already exists. Please choose a different name.</p> : ""}
        </>
    );
}
 
export default SignUpForm;