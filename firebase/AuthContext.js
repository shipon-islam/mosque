import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "./index";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [isSignup, setIsSignup] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // signup function
  async function signup(email, password, username) {
    setIsSignup(true);
    try {
      const mydata = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // update profile
      await updateProfile(auth.currentUser, {
        displayName: username,
      });

      const user = auth.currentUser;
      setCurrentUser({
        ...user,
      });
      setIsSignup(false);
      toast.success("Register successful", { autoClose: 1000 });
      router.push("/");
    } catch (err) {
      setIsSignup(false);
      toast.error("User already exist", { autoClose: 1000 });
      console.log(err);
    }
  }

  // login function
  async function login(email, password, path) {
    setIsSignup(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsSignup(false);
      toast.success("Login successful", { autoClose: 1000 });

      router.push(path);
    } catch (error) {
      setIsSignup(false);
      toast.error("Invalid creadentials", { autoClose: 1000 });
    }
  }

  // logout function
  function logout() {
    router.push("/");
    return signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading,
    isSignup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
