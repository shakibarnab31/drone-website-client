
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Pages/Login/FireBase/firebase.init';


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                // save user to data base
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch((error) => {

                    });

                history.replace('/')
                setAuthError('')
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/'
                history.replace(destination);
                setUser(result.user);
                setAuthError('')
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])




    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch(error => { })
            .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        authError,
        isLoading,
        admin,
        registerUser,
        loginUser,
        logOut
    }
}
export default useFirebase;