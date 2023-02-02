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

        <div className="h-full">
     
          <ThemeProvider theme={theme}>
      
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100vh'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div className="w-1/2 p-4">
            <Box component="form" onSubmit={handleFormSubmit}  sx={{ mt: 1 }}>
                <Grid item>
                  
                  {"Login"}
               
                </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Username"
                name="UserName"
                autoComplete="username"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

                
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                
              </Grid>
              
             
            </Box>
            </div>
            {logInFailed ? <p className="logInFailed">User name not recognised. Don't have an account? Sign up!</p> : ""}
          </Box>
        </Grid>
    </ThemeProvider> 
    
        </div>
    );
}

 
export default LoginForm;