import { useContext } from "react";
import { AuthContext } from "../provider/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" replace />;
};

export default PrivateRoute;
