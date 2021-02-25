import React, { Component } from "react";
import FormInput from "../form-input/formInput.component";
import Button from "../Buttons/button.components";

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Already have an account</h2>
          <span>Sign in with your email and password</span>
          <FormInput
            name="email"
            type="email"
            value={email}
            label='email'
            required
            handleChange={this.handleChange}
          />
          <FormInput
            value={password}
            type="password"
            name="password"
            label='password'
            required
            handleChange={this.handleChange}
          />
          <Button type='submit'>Sign in</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
