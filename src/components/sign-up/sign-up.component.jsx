import React, { Component } from "react";
import "./sign-up.style.scss";
import { auth,createUserProfile } from "../../firebase/firebase.utils";
import Button from "../Buttons/button.components";
import FormInput from "../form-input/formInput.component";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async e => {
      e.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;
      if(password !== confirmPassword){
        alert('password do not match')
        return;
      }
     
      try{
         const {user}= await auth.createUserWithEmailAndPassword(email, password);
         await createUserProfile(user,{displayName})
         this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
           
         }catch(error){
        console.error(error)

      }

  };
  handleChange = (e) => {
     const{name,value} = e.target;
     this.setState({[name]: value})
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
       <h2 className="title">I dont have an account</h2>
        <span>Sign up now</span>
        
        <form onSubmit={this.handleSubmit}>
           
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            required
            label="fullname"
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            value={email}
            name="email"
            required
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            value={password}
            name="password"
            required
            label="password"
            onChange={this.handleChange}
          />
           <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            required
            label="confirm password"
            onChange={this.handleChange}
          />

          <Button type='submit'>SIGN UP</Button>
         
        </form>
      </div>
    );
  }
}

export default SignUp;
