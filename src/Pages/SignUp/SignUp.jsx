import React, { useState } from 'react';
// import { FaEye } from "react-icons/fa";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';
import { Link } from 'react-router';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage,setSuccessMessage]= useState(false)
    
    const handleSignUpButton = (e) => {
        
        e.preventDefault()
        
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
         const terms = e.target.terms.checked
        console.log(email, password)
        
        setSuccessMessage(false)
        setErrorMessage('')

        //termsCheck
        if(!terms){
            setErrorMessage('You must agree to the Terms and Conditions.')
            return;
        }

        //passValidation
        const passRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/
        if(passRegExp.test(password)===false){
            setErrorMessage('Password must be at least 6 characters, contain 1 lowercase letter,1 uppercase letter and 1 number.')
            return;
        }
        
        //create User
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                //email verify
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    //setSuccessMessage(true)
                    alert('Check your email or spam folder! Verify your account before logging in.')
                 });
                 
                 //update Profile
                  const profile={
                    displayName :name
                  }

                 updateProfile(auth.currentUser,profile )
                 .then(() => {
                  console.log('User profile updated')
                }).catch((error) => {
                 console.log(error.message)
                });
            })
            .catch(error => {
                console.log(error.message)
                const match = error.message.match(/\(([^)]+)\)/)
                setErrorMessage(match[1])
            });
    }
    return (
        <div className="mt-10 card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSignUpButton} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Your name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label" >Set a password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    <fieldset className="fieldset bg-base-100 rounded-box w-64 p-4">
                        <label className="label">
                            <input type="checkbox" name='terms' className="checkbox" />
                            Accept terms and conditions
                        </label>
                    </fieldset>
                    <input className='mt-2 btn btn-neutral' type="submit" value="Sign up" />
                </form>
                <p>Already signed up? <Link className='text-blue-500 underline' to='/signin'>Login</Link></p>
                    {
                        successMessage?<p className='text-green-500'>Successfully signed up.</p>:<p className='text-red-500'>{errorMessage}</p>
                    }
                
            </div>
        </div>
    );
};

export default SignUp;