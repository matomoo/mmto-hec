import { db } from './firebase';
import { promisify } from 'es6-promisify';

 export const doCreateUser = promisify(( id, username, email, role ) => {
    db.ref(`users/${id}`).set({
        username,
        email,
        role
    });
});

export const onceGetUsers = () => {
    db.ref('users').once('value');
};