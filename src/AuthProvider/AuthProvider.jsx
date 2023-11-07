import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.cofig";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  }; 

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user", currentUser);

      setLoading(false);
      const userEmail = currentUser?.email || user?.email;
      const logedUser = { email: userEmail };
      if (currentUser) {
        fetch("https://foodie-fellowship-server.vercel.app/api/v1/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(logedUser),
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      } else {

        
        fetch("https://foodie-fellowship-server.vercel.app/api/v1/logout", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(logedUser),
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    googleLogin,
    login,
    register,
    updateUserProfile,
    logout,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
