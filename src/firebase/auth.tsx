import { auth } from './firebase';

//Sign In
export const doSignInWithEmailAndPassword = (email, password) => 
    auth.signInWithEmailAndPassword(email, password);

//Sign Out
export const doSignOut = () => 
    auth.signOut();