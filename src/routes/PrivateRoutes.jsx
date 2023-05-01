import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (user) {
        return children;
    }

    return <Navigate to={"/login"} state={{ from: location }} replace />
};

export default PrivateRoutes;


/* 
# steps:
1. check user is login or not;
2. if user is logged in, then allow them to visit the route;
3. else redirect the user to the login page with <Navigate />;
4. setup the private route;

*/