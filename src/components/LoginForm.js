import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
    const theme = createTheme()

    return (  

        <>
         {/* <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleFormSubmit}  sx={{ mt: 1 }}>
                <Grid item>
                  
                  {"Login"}
               
                </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Username"
                label="Username"
                name="Username"
                autoComplete="username"
                autoFocus
               onChange={handleChange}
               value= {inputUser}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

                <Grid item>
                  
                    {"Or Sign Up"}
                 
                </Grid>

            <TextField
                margin="normal"
                required={false}
                fullWidth
                id="SignUp"
                label="Sign Up"
                name="Sign Up"
                autoFocus
                
              />
        
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                
              </Grid>
             
            </Box>
            {logInFailed ? <p className="logInFailed">User name not recognised. Don't have an account? Sign up!</p> : ""}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider> */}
        
            <form className="logInForm" onSubmit={handleFormSubmit}>
                <h2>Already have an account? Log in</h2>
                <input
                    type="text"
                    placeholder="Your name"
                    name="userName"
                    id="userName"
                     onChange={handleChange}
                     value={inputUser}
                />
                <button type="submit">Log In</button>
            </form>
            
      

        </>

    );
}

 
export default LoginForm;