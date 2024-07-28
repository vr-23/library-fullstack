import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';
import './login.css'

const Login = () => {
  const paperStyle={padding:20,height:'70vh',width:400, margin:"20px auto"}

  // const style={padding-bottom :20}
  
  return (
    <>
    <Grid align='center'>
      <Paper elevation={10} style={paperStyle}>
        <Grid >
           <h2>
              Sign In
            </h2>
          </Grid>
          
          <TextField id="outlined-basic" label="Email" sx={{ paddingBottom: '20px' }}fullWidth required />
          <TextField   label="Password" fullWidth required />
          <FormControlLabel
        control={<Checkbox name="rememberMe" />}
        label="Remember Me"
      />
      <Button variant="contained" size="medium" fullWidth>
          Sign In
        </Button>
        <Typography>
        <Link href="#" >Forgot Password ?</Link>
        </Typography>
        <Typography>Do you have an account?
        <Link href="Signup">Sign Up</Link>
        </Typography>
      </Paper>
      
    </Grid>
    </>
  )
}

export default Login