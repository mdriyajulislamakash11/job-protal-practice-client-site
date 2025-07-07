import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      // setUser(currentUser);

      if (currentUser.email) {
        const user = { email: currentUser?.email };

        axios
          .post("hhtp://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log("Login Token", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post("hhtp://localhost:5000/jwt", {}, { withCredentials: true })
          .then((res) => {
            console.log("log Out", res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  });

  const authInfo = {
    user,
    logOut,
    setUser,
    loading,
    loginUser,
    setLoading,
    googleLogin,
    registerUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
