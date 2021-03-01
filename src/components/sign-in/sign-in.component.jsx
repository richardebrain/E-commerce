import React, { Component } from "react";
import FormInput from "../form-input/formInput.component";
import Button from "../Buttons/button.components";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.style.scss';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      password: "",
      email: "",
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { email,password } = this.state;
    return (
      <div className='sign-in'>
        <form onSubmit={this.handleSubmit}>
          <h2 className='title'>Already have an account</h2>
          <span>Sign in with your email and password</span>
          <FormInput
           handleChange={this.handleChange}
            name="email"
            type="email"
            value={email}
            label='email'
            required
          />
          <FormInput
           handleChange={this.handleChange}
            value={password}
            type="password"
            name="password"
            label='password'
            required
          />
          <div className='buttons'>
          <Button type='submit'>SIGN IN</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
