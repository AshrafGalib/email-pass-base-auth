import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { Link, Navigate, useNavigate } from 'react-router';

const SignIn = () => {
     const navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState('')
const [successMessage,setSuccessMessage]= useState(false)

    const handleSignInButton=(e)=>{
      
        e.preventDefault()
     
       const email =e.target.email.value  
      const password = e.target.password.value
      console.log(email,password)
       
       setSuccessMessage(false)
       setErrorMessage('')

      //Login user
      signInWithEmailAndPassword(auth,email,password)
      .then(result=>{
        console.log(result)
        if(!result.user.emailVerified){
            setErrorMessage('Verify your email first.Check your mail.Then Login.')
            return;
        }
        else{
            setSuccessMessage(true)
            navigate('/flowersForYou')
        }
      })
      .catch(error=>{
        console.log(error)
        const match = error.message.match(/\(([^)]+)\)/)
        setErrorMessage(match[1])
        return;
      })
    }
    return (
        <div>
             <div className="mt-10 card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSignInButton}  className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label" >Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <input className='btn btn-neutral' type="submit" value="Login" />
                </form>
                <p>New user? <Link className='text-blue-500 underline' to='/signup'>Signup</Link> today.</p>
              {
                successMessage?<p className='text-green-500'>Logged in successfully.</p>:<p className='text-red-500'>{errorMessage}</p>
              }
            </div>
        </div>
        </div>
    );
};

export default SignIn;