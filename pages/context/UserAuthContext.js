import { createContext, useEffect, useState, useContext } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, deleteUser, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/firebase'


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState()
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        console.log(email);
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    function deleteUser1(user) {
        deleteUser(user).then(() => {
            console.log('Utilizatorul a fost sters!')
        }).catch((error) => {
            console.log(error)
        });
    }

    function resetPasswordEmail1(email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Emailul cu link-ul de resetare a parolei a fost trimis!')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => { unsubscribe(); }
    }, [])
    return (<userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn, deleteUser1, resetPasswordEmail1 }}>{children}</userAuthContext.Provider>)
}

export function useUserAuth1() {
    return useContext(userAuthContext);
}