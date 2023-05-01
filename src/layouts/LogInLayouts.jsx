import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigatinBar/NavigationBar';

const LogInLayouts = () => {
    return (
        <div>
            <NavigationBar />

            <Outlet />
        </div>
    );
};

export default LogInLayouts;