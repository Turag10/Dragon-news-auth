import { createContext, useEffect, useState } from "react";
import app from "../pages/Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import Login from "../pages/Login";

// Create the context
export const AuthContext = createContext();

// Initialize Firebase Auth
const auth = getAuth(app);

// Create the context provider component
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user with email and password
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user with email and password
  const userLogin = (email, password) => {
     setLoading(true);
    return signInWithEmailAndPassword(auth, email, password); // ✅ Corrected
  };

  // Logout user
  const logOut = () => {
     setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData);
  };

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Auth info provided to all children
  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    Login,
    logOut,
    loading,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
