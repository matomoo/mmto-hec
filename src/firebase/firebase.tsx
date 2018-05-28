import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAfphYZF25FnZNGBrmQrVyfRpbCGmSOqoE",
    authDomain: "mmto-hec.firebaseapp.com",
    databaseURL: "https://mmto-hec.firebaseio.com",
    projectId: "mmto-hec",
    storageBucket: "mmto-hec.appspot.com",
    messagingSenderId: "894163381176"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { 
    db,
    auth,
};