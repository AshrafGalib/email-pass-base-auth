import React from 'react';
import { useLocation } from 'react-router';

const Flower = () => {
     const location = useLocation();
     const { email, name } = location.state || {};
    return (
        <div className='mt-10'>
            <h1 className='text-gray-300 font-bold w-10/12 mx-auto text-2xl text-center'>Welcome, {name}!</h1>
            <p className='text-gray-300 font-bold w-10/12 mx-auto text-2xl text-center'>Your verified email is : {email}.</p>
        </div>
    );
};

export default Flower;