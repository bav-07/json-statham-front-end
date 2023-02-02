import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';

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

        <div className="flex flex-col justify-center self-center h-screen w-[70%] p-20 text-center  mx-auto">
            <form className="logInForm flex flex-col justify-center font-['Inter']" onSubmit={handleFormSubmit}>
                <div className="justify-center mb-3">
                    <LoginIcon fontSize="large" className="dark:text-white"/>
                </div>
                
                <h2 className="font-['Inter'] font-extrabold text-3xl tracking-tighter dark:text-white text-slate-900">Already have an account? Log in</h2>
                <input className="text-center my-[3vh] w-[100%] mx-auto p-5 rounded-lg font-['Inter']"
                    type="text"
                    placeholder="Your name"
                    name="userName"
                    id="userName"
                    // onChange={handleChange}
                    // value={inputUser}
                />
                <Button variant="contained" type="submit">Log In</Button>
            </form>
            {logInFailed ? <p className="logInFailed text-slate-900 dark:text-white font-['Inter'] p-4">User name not recognised. Don't have an account? Sign up!</p> : <p className="opacity-0 p-4">Invisible text</p>}
        </div>

    );
}
 
export default LoginForm;