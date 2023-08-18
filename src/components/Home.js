import React, { Component } from 'react'
import Confirmation from './Confirmation'
import RequiredDocs from './RequiredDocs'
import Success from './Success'
import Welcome from './Welcome'

// const steps = ["Required Documents","Rental Application", "Add Documents"];
export class home extends Component {

    state = {
        step: 0,
        firstName: '',
        lastName: '',
        email: '',
        photoId: '',
        rentalApp: '',
        loe: '',
        crs: ''
      };

      // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {

    const { step } = this.state;
    const { firstName, lastName, email, photoId, rentalApp,loe,crs} = this.state;
    const values = { firstName, lastName, email, photoId, rentalApp,loe,crs};

    switch (step) {
        case 0:
            return (
              <Welcome
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );

        case 1:
          return (
            <RequiredDocs
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <Confirmation
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 3:
          return <Success />;
        default:
          (console.log('This is a multi-step form built with React.'))
      }
    }
}

export default home