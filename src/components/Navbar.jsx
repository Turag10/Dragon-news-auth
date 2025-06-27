import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      {/* Email display */}
      <div className="font-medium">{user && user.email}</div>

      {/* Nav links */}
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      {/* User section */}
      <div className="login flex gap-2 items-center">
        {/* Conditionally show profile icon */}
        <div className="w-8 h-8">
          <img
            src={user?.photoURL || userIcon}
            alt="User Icon"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Login / Logout button */}
        {user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
