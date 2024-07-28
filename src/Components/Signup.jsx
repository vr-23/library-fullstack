import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';
import '../Styles/login.css'

const Signup = () => {
  const paperStyle={padding:20,height:'70vh',width:400, margin:"20px auto"}

  // const style={padding-bottom :20}
  
  return (
    <>
    <Grid align='center'>
      <Paper elevation={10} style={paperStyle}>
        <Grid >
           <h2>
              Sign Up
            </h2>
          </Grid>
          
          <TextField id="outlined-basic" label="First Name" sx={{ paddingBottom: '20px' }}fullWidth required />

          <TextField   label="Last Name" sx={{ paddingBottom: '20px' }} fullWidth required />
          <TextField   label="Email" sx={{ paddingBottom: '20px' }} fullWidth required />
          <TextField   label="Password"sx={{ paddingBottom: '20px' }} fullWidth required />
      <Button variant="contained" size="medium" fullWidth>
          Submit
        </Button>
        <Link href="SignIn">Sign In</Link>

      </Paper>  
    </Grid>
    </>
  )
}

export default Signup;