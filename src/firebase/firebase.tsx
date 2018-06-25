import firebase from "firebase";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyAfphYZF25FnZNGBrmQrVyfRpbCGmSOqoE",
	authDomain: "mmto-hec.firebaseapp.com",
	databaseURL: "https://mmto-hec.firebaseio.com",
	projectId: "mmto-hec",
	storageBucket: "mmto-hec.appspot.com",
	messagingSenderId: "894163381176",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

const dbFStore = firebase.firestore();
const settingFStore = { timestampsInSnapshots : true };
dbFStore.settings(settingFStore);

export {
	db,
	auth,
	dbFStore,
};