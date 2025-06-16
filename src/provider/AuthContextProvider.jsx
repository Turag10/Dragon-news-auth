import { createContext, useState } from "react";
import app from "../pages/Firebase/Firebase.config"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  
  

  const createNewUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
