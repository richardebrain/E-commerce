import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-out.style.scss'

const SignInAndOut = () => {
    return (
        <div className='sign-in-and-out'>
            <SignIn/>
            <SignUp/>
            
        </div>
    )
}

export default SignInAndOut
