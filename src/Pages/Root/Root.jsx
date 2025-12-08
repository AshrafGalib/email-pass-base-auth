import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;