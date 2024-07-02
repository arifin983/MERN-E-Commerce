import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation} from "react-router-dom";


const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const location  = useLocation();
  const pathname = location.pathname;
  return (
    <Fragment>
    
       {isAuthenticated? <Outlet/>:<Navigate to={`/login?redirectTo=${pathname}`}/>}
      
    </Fragment>
  );
};

export default ProtectedRoute;