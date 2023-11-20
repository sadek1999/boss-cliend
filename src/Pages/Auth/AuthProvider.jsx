import { createContext, useReducer, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./firebase.config";

export  const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loding, setloding] = useState(true)
    const provider = new GoogleAuthProvider();

    const googlelogin = () => {
        return signInWithPopup(auth, provider)
    }


    const singup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    useReducer(() => {
        const unsubscrib = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser);
            setloding(false)
        })
        return unsubscrib;
    }, [])

    const info = {
        user,
        loding,
        singup,
        login,
        logout,
        googlelogin

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;