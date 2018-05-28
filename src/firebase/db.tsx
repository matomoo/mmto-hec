import { db } from './firebase';

export const doCreateUser = ( id, username, email, role ) => {
    db.ref(`users/${id}`).set({
        username,
        email,
        role
    });
}

export const onceGetUsers = () => {
    db.ref('users').once('value');
} 