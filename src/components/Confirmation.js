import React, { Component } from 'react'
import Button from '@mui/material/Button';

const  Confirmation = ({prevStep, nextStep, handleChange, values }) =>{
    const { firstName, lastName, email} = values
    const Continue = e => {
        e.preventDefault();
        nextStep();
      };
    
      const back = e => {
        e.preventDefault();
        prevStep();
      };
    
    return (
      <div>
        <p> <strong>First Name:</strong> {firstName} </p>
        <p> <strong>Last Name Name:</strong>  {lastName} </p>
        <p> <strong>Email:</strong>      {email} </p>

        <p> Is the above Information Correct?</p>
        <Button
            onClick={back}
            className="Back"
            > NO
          </Button>
          <Button
            onClick={Continue}
            className="Continue"
            > YES
          </Button>
      </div>
    )

}
export default Confirmation