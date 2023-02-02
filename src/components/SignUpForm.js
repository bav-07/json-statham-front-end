import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const SignUpForm = ({users, setUser, setUsers}) => {

    const navigate = useNavigate();

    const [signUpFailed, setSignUpFailed] = useState(false);

    const [stateUser, setStateUser] = useState(
        {
            "name": ""
        }
    )

    const theme = createTheme()

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
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
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
                  {"Sign Up"}
                </Grid>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Sign Up"
                name="name"
                autoComplete="username"
                autoFocus
                onChange={handleChange}
                value={stateUser.name}
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
            {signUpFailed ? <p className="logInFailed">An account with this name already exists. Please choose a different name.</p> : ""}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider> 



            {/* <form className="signUpForm" onSubmit={handleFormSubmit}>
                <h2>Sign up to react to your favourite movies and state your opinion</h2>
                <input
                    type="text"
                    placeholder="What's your name?"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={stateUser.name}
                />
                <button type="submit">Sign Up</button>
            </form>
            {signUpFailed ? <p className="logInFailed">An account with this name already exists. Please choose a different name.</p> : ""} */}
        </>
    );
}
 
export default SignUpForm;