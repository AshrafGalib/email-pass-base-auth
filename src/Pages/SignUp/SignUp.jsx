import React, { useState } from 'react';
// import { FaEye } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage,setSuccessMessage]= useState(false)
    const handleSignUpButton = (e) => {
        e.preventDefault()
        // const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        // const terms = e.target.terms.checked
        console.log(email, password)
        setSuccessMessage(false)
        setErrorMessage('')
        //create User
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                setSuccessMessage(true)
            })
            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
            });
    }
    return (
        <div className="mt-10 card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSignUpButton} className="fieldset">
                    {/* <label className="label">Name</label>
                    <input type="name" className="input" name='name' placeholder="Name" /> */}
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label" >Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    {/* <fieldset className="fieldset bg-base-100 rounded-box w-64 p-4">
                        <label className="label">
                            <input type="checkbox" name='terms' className="checkbox" />
                            Accept terms and conditions
                        </label>
                    </fieldset> */}
                    <input className='mt-2 btn btn-neutral' type="submit" value="Sign up" />
                </form>
                    {
                        successMessage?<p className='text-green-500'>Successfully signed up.</p>:<p className='text-red-500'>{errorMessage}</p>
                    }
                
            </div>
        </div>
    );
};

export default SignUp;