import logo from './logo.svg'; //importing logo
import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar'; //importing visual elements for homepage
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import SendIcon from '@mui/icons-material/Send';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function App() {
  return (
    <Box>
      <AppBar>
        <Toolbar style={{backgroundColor:"lightblue"}}> //light blue background color
          <Box>
            <Grid container direction="row" justifyContent="space-evenly" style={{width:"100vw"}}>
              <Grid item>
                Gator Calendar
              </Grid>
              <Grid item>
                <Button size="small">Home</Button>
                <Button size="small">About</Button>
                <Button size="small">Contact</Button>
              </Grid>
              <Grid item>
                <Button size="small" endIcon={<PersonAddIcon />}>Sign Up</Button>
                <Button size="small" endIcon={<LoginIcon />}>Log in</Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>

      <Box 
      style={{
        backgroundColor:"blue", width:"100vw", height:"100vh", //specifying background color & size for homepage below taskbar
        display:"flex", flexDirection:"column", 
        alignItems:"center", justifyContent:"center"}}>
          <h1>Gator Calendar</h1> //website title
          <text>some other stuff goes here I guess</text>
          <h6>howdy</h6>
      </Box>
    </Box>
  );
}

export default App;
