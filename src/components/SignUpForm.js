import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import LockOpenIcon from '@mui/icons-material/LockOpen';


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
        <div className="flex flex-col justify-center self-center h-fit w-[70%] bg-slate-800/20 backdrop-blur shadow-2xl p-20 text-center  mx-auto">
            <form className="signUpForm flex flex-col justify-center font-['Inter']" onSubmit={handleFormSubmit}>
              <div className="justify-center mb-3">
                    <LockOpenIcon fontSize="large" className="text-white"/>
                </div>
                <h2 className="font-['Inter'] font-extrabold text-3xl tracking-tighter text-white">Sign up to react to your favourite movies and state your opinion</h2>
                <input className="text-center my-[3vh] w-[100%] mx-auto p-5 rounded-lg font-['Inter']"
                    type="text"
                    placeholder="What's your name?"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={stateUser.name}
                />

                <Button variant="contained" type="submit">Sign Up</Button>
                
                {/* <button className="font-['Inter'] uppercase tracking-widest p-4 bg-blue-500 text-white w-[30%] mx-auto rounded-lg" type="submit">Sign Up</button> */}
            </form>
            {signUpFailed ? <p className="logInFailed text-white font-['Inter'] p-4">An account with this name already exists. Please choose a different name.</p> : <p className="opacity-0 p-4">An account with this name already exists. Please choose a different name.</p>}
        </div>
    );
}
 
export default SignUpForm;