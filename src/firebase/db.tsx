import { db } from './firebase';
import { promisify } from 'es6-promisify';

export const doCreateUser = promisify(( id, username, email, role ) => {
    db.ref(`users/${id}`).set({
        username,
        email,
        role
    });
});

export const doSimpanPasien = ( id, tanggalPeriksa, hasilAnalysis ) => {
    db.ref(`pasiens/${id}`).set({
        tanggalPeriksa,
        hasilAnalysis
    });
};

export const onceGetUsers = () => {
    db.ref('users').once('value');
};

export const GetAllPasien = () => {
    const getter = db.ref('users').once('value');
    return getter;
};

export const GetSingleUsers = (uid) => {
    const resUser = db.ref(`users/${uid}`).once('value')
    // .then(snapshot => {
    //     snapshot.val()
    // });
    return resUser;
    //console.log( userFromDb);
};