import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {

    const[username, setUsername]=React.useState();
    const[password, setPassword]=React.useState();
    const[name, setName]=React.useState();
    const[error, setError]=React.useState();
    const[messages, setMessages]=React.useState();
    
    const[formState, setFormState]=React.useState(0);
    
     const[open, setOpen]=React.useState(false);
    const{handleRegister, handleLogin}=React.useContext(AuthContext);
     let handleAuth=async()=>{
      try{
        if(formState === 0){
          let result=await handleRegister(name, username, password);
          setOpen(true);
          setError("");
          setPassword("");
          setFormState(1);
        }

        if(formState  === 1){
          let result=await handleLogin(username, password);
          
        }
       
      }catch (err){
        console.log(err);
      }
     }
  return (
    <ThemeProvider theme={defaultTheme}>
        
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1675448891091-bd343b45e2fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
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
            <div>
                <Button variant={formState === 0 ? "contained" : ""} onClick={()=>{setFormState(0)}}>Sign Up</Button>
                <Button variant={formState === 1 ? "contained" : ""} onClick={()=>{setFormState(1)}}>Log in</Button>
            </div>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
           {
            formState === 0 ? 
            <TextField
            margin="normal"
            required
            fullWidth
            id="fullname"
            label="Full Name"
            name="fullname"
            autoFocus
            onChange={(e)=> setName(e.target.value)}
          /> : ""
           }
              <TextField
                margin="normal"
                required
                fullWidth
                id="Username"
                label="Username"
                name="Username"
                onChange={(e)=> setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e)=> setPassword(e.target.value)}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
               {formState === 0 ?  "SignUp" : "Login"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
