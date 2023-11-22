import { createContext, useEffect,  useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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

    const update=(name,photo)=>{
        return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
            
    }

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, currentuser => {
            console.log(currentuser)
            setuser(currentuser);
            setloding(false)
        });
        return unsubscrib;
    }, [])
    
    

    const info = {
        user,
        loding,
        singup,
        login,
        logout,
        googlelogin,
        update

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;