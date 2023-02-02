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
import { styled } from '@mui/material/styles'



const LoginForm = ({users, setUser, setUsers}) => {
    

    setUser("");

    const whiteTheme = createTheme({
      palette: {
        white: {
          main: '#ffffff'
        }
      }
    })


    const [logInFailed, setLogInFailed] = useState(false);

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

    const handleSignupSubmit = (event) => {
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



    //const [inputUser, setInputUser] = useState("");

    const CustomTextfield = styled(TextField)((({darkMode}) => {
      return {
          // backgroundColor: '#0f172a00',
          color: '#e8e8e8',
          // padding: '20px',
          // border: '0px',
          '.MuiTextField-root': {},

      }
      
  }))

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
         <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh', backgroundColor:'black'}}>
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
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} 
              sx={{ backgroundImage: "radial-gradient(at right top, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
                color: 'white'
              }} 
              square>
          <Box
            sx={{
              my: 20,
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
          <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1, "& .MuiOutlinedInput-root.Mui-disabled":{"& > fieldset": {border: '1px solid white'}}}}>
          <Grid item>
            {"Login"}
          </Grid>
          <ThemeProvider theme={whiteTheme}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="userName"
              autoComplete="username"
              autoFocus
              color="white"
              sx={{
                "& .MuiInputLabel-root": {color: 'white'},//styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "white" },
                },
              }}
              style={{
                
                borderRadius: "5px"
              }}
            />
          </ThemeProvider>  
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
          <Box component="form"  onSubmit={handleSignupSubmit} sx={{ mt: 1,}}>
          <ThemeProvider theme={whiteTheme}>
            <TextField
              margin="normal"
              required={false}
              fullWidth
              id="name"
              label="Sign Up"
              name="name"
              autoComplete="username"
              autoFocus
              onChange={handleChange}
              value={stateUser.name}
              color="white"
              style={{
                borderRadius: "5px"
              }}
            />
          </ThemeProvider>
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
          </Box>
          {logInFailed ? <p className="logInFailed">User does not exist. If you don't have an account, sign up.</p> : ""}
          </Box>
          </Grid>
          </Grid>
        </ThemeProvider>
       </>
    );
}

 
export default LoginForm;