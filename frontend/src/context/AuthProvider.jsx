

import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //create account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //signup with gamil
  const signUpWithGamil = () => {
    return signInWithPopup(auth, googleProvider)
  }
  //login with email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  //logout
  const logOut = () => {
    return signOut(auth)
  }

  //update profile
  const updateUserProfile = ({ name, photoURL }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
  }
  //check signed-in user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,
      (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          setIsLoading(false);
        } else {
        }
      });
    return () => {
      return unSubscribe();
    }
  }, [])

  const authInfo = {
    user, login, logOut,
    createUser,
    signUpWithGamil,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
