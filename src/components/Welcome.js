import React, { Component } from 'react'
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Checkbox, FormControlLabel} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'
import crp from '../files/crp.pdf'
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import rentalApp from "../files/rental_application.pdf";
import Realtor from '../img/Realtor.jpg'

const Welcome = ({ nextStep}) => {

  const element = <FontAwesomeIcon icon={faFilePdf} size="lg"/>
 
  const Continue = e => {
        e.preventDefault();
        nextStep();
      };

      const [checkOne, setCheckOne] = useState(false);
      const [checkTwo, setCheckTwo] = useState(false);
      const [checkThree, setCheckThree] = useState(false);
      const [checkFour, setCheckFour] = useState(false);
 
  

      const [open, setOpen] =  useState(false);
  
      const handleClickOpen = () => {
          setOpen(true);
      };
      
      const handleClose = () => {
        setOpen(false);
      };

      const toggle = (value) =>{
        return !value;
      }
    
    const RealtorPage = "Realtor Website";
    
    return (
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/* Top Left */}
            </Grid>
            
            <Grid item xs= {8}>
              <h1 className='h1'>
                  Welcome To My Application Portal!
                </h1> 
                    <Card className= "alert" sx={{ borderRadius: '2rem' }}>
                    <a herf = {crp}  target="blank" class= "fa-cog" onClick={handleClickOpen}> {element} Condo Rental Process</a>
                            <Dialog
                                  open={open}
                                  onClose={handleClose}
                                  maxWidth={"md"}
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                            >
                                <DialogContent>
                                    <img src= {require('../img/condoRentalProcess_1.jpg')} />
                                    <img src= {require('../img/condoRentalProccess_2.jpg')} />
                                </DialogContent>
                                <Button onClick={handleClose}>
                                    close
                                </Button>
                            </Dialog>
                            <p> Hello, </p>
                            <p> To rent ANY unit in Toronto, the following documentation is required along with a copy of YOUR PHOTO ID </p>
                            <p><strong style={{color: "#e71b4c"}}>TO CONTINUE, PLEASE CHECK THE FOLLOWING BOXES IF YOU HAVE THE DOCUMENTS READY</strong></p>
                                <Grid container spacing={0} >
                                        <FormControl component="fieldset">
                                        <FormGroup aria-label="position" row>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                label={<strong>Photo ID</strong>}
                                                control={<Checkbox />}
                                                checked={checkOne}
                                                onChange={() => setCheckOne(toggle)}
                                                value="photoId" 
                                                labelPlacement="end"
                                                />    
                                            </Grid>


                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                label={<strong>RENTAL APPLICATION {' '}
                                                <a href={rentalApp} target="_blank" style={{color: "#07364b"}} >
                                                Click Here</a>
                                                </strong>}
                                                control={<Checkbox />}
                                                checked={checkTwo}
                                                onChange={() => setCheckTwo(toggle)}
                                                value="crs" 
                                                labelPlacement="end"

                                                />    
                                                <p>Fill it out in as much detail as possible</p> 
                                            </Grid>


                                            <Grid item xs={12}>
                                            <FormControlLabel
                                                label={<strong>CREDIT REPORT & SCORE</strong>}
                                                control={<Checkbox />}
                                                checked={checkThree}
                                                onChange={() => setCheckThree(toggle)}
                                                value="loe" 
                                                labelPlacement="end"
                                                />   
                                            <p>Please open all the tabs so that all of your detailed information is displayed and then save as a PDF. </p>
                                            <p>Let me know if you have any questions</p>
                                            </Grid>

                                            <Grid item xs={12}>
                                            <FormControlLabel
                                                label={<strong>LETTER OF EMPLOYMENT</strong>}
                                                control={<Checkbox />}
                                                checked={checkFour}
                                                onChange={() => setCheckFour(toggle)}
                                                value="references" 
                                                labelPlacement="end"
                                                /> 
                                            <p>Make sure it has your ANNUAL Salary on it</p>
                                            <p>For Self Employed persons 2 year NOA history required</p>
                                            </Grid>

                                              </FormGroup>
                                            </FormControl>
                                          </Grid>

                          
                          
                          <p><strong>REFERENCES</strong></p>
                          <p>   Optional but Recommended</p>
                          <p>Please have all of the above mentioned documentation arranged  and sent back ASAP.</p>
                          <p>Also attached is a detailed info graphic PDF I have created that goes through the entire rental process. Please read it over!</p>                  
                          Best, Realtor
                          <br/>
                          </Card>
                   <Button
              color="success"
              className= "Continue"
              onClick={Continue}
              sx={checkOne && checkTwo && checkThree && checkFour?{ visibility: 'visible' }:{ visibility: 'hidden' }}
            >Continue</Button>
                   
            </Grid>


            <Grid item xs={2}>

                <Card className='show-card'>
                   <CardContent className="cardBackground" >
                      <CardMedia
                          component="img"
                          className='profile'
                          height="200"
                          image = {Realtor}
                      />
                      <p className ="cardName"> Realtor</p>
                      <p>Sales Representative</p>
                      <p style={{color: "#e71b4c"}}> <strong>Top Producer</strong></p>
                      <p><strong>Brokerage Name</strong></p>
                      <p>o: Phone Number <br/>c: Phone Nu,ber</p>
                      <a href ="mailto:">Realtor.at.email</a>
                      <p>Realtor Location</p>
                      <a href={RealtorPage} target="_blank" style={{color: "#e71b4c"}}>View my profile</a>
                    </CardContent>
                </Card>

                <Card className='hide-card'></Card>

            </Grid>
          </Grid>
    )
  }

export default Welcome

