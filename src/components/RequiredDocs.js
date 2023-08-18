import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import {Checkbox, FormControlLabel} from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';


const RequiredDocs = ({prevStep, nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();

  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };


  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [checkFour, setCheckFour] = useState(false);
  

  const toggle = (value) =>{
    return !value;
  }
  
    return (
      <div className='App-header'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 

      <p>PLEASE ENSURE ALL DOCUMENTS & INFORMATION PROVIDED IS CORRECT</p>

      <Grid container spacing={3}>

        <Grid item xs= {4}>
              <input className ="InputBox" placeholder="First Name" type="text" label="First Name" id="firstName" name="firstName" onChange={handleChange('firstName')} />
                {console.log(`${handleChange('firstName')}`)}
        </Grid>

        <Grid item xs= {4}>
              <input className ="InputBox" placeholder="Last Name" type="text" label="Last Name" id="lastName" name="lastName" onChange={handleChange('lastName')} />
                 {console.log(`${handleChange('lastName')}`)}
        </Grid>

        <Grid item xs= {4}>
              <input className ="InputBox" placeholder="Email" type="text" label="Email" id="email" name="email" onChange={handleChange('email')} />
                 {console.log(`${handleChange('email')}`)}
        </Grid>

        <Grid item xs= {4}>
          <form className='InputBox'>
          <label for="photoID"> Upload Your Photo ID (.jpeg, .jpg, .png): </label>
                <input 
                  type="file" 
                  id="photoID" 
                  name="Photo Id"
                  accept=".jpg, .jpeg, .png" 
                  control={<Checkbox />}
                  checked={checkOne}
                  onChange={() => setCheckOne(toggle)}/>
                {/* <input type="submit" /> */}
            </form>
        </Grid>

        <Grid item xs= {4}>
          <form className='InputBox'>
          <label for="rentalApp"> Upload Your Rental Application (.pdf): </label>
                <input 
                  type="file" 
                  id="rentalApp" 
                  name="Rental Application"
                  accept=".pdf"
                  control={<Checkbox />}
                  checked={checkTwo}
                  onChange={() => setCheckTwo(toggle)} />
                {/* <input type="submit" /> */}
            </form>
        </Grid>

        <Grid item xs= {4}>
          <form className='InputBox'>
          <label for="crs"> Upload Your Credit Report & Score: </label>
                <input 
                  type="file" 
                  id="crs" 
                  name="Credit Report & Score"
                  control={<Checkbox />}
                  checked={checkThree}
                  onChange={() => setCheckThree(toggle)}
                  />
                {/* <input type="submit" /> */}
            </form>
        </Grid>


        <Grid item xs= {4}>
          <form className='InputBox'>
          <label for="loe"> Upload Your Letter of Employment: </label>
                <input 
                  type="file" 
                  id="loe" 
                  name="Letter of Employment"
                  control={<Checkbox />}
                  checked={checkFour}
                  onChange={() => setCheckFour(toggle)}
                  />
                {/* <input type="submit" /> */}
            </form>
        </Grid>

        
        <Grid item xs= {12}>
            <Button
              className= "Continue"
              onClick={Continue}
              sx={checkOne && checkTwo && checkThree && checkFour?{ visibility: 'visible' }:{ visibility: 'hidden' }}
            >Continue</Button>
        </Grid>

      <Grid item xs= {12}>
        <Button
            onClick={back}
            className="Back"
            >Back
          </Button>
      </Grid>


          </Grid>  
    </div>
    )
}

export default RequiredDocs




