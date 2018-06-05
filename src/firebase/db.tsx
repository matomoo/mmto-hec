import { db } from "./firebase";
// import { promisify } from "es6-promisify";

export const doCreateUser = ( id, username, email, role ) => {
	db.ref(`users/${id}`).set({
		username,
		email,
		role,
	});
};

export const doSimpanPasien = ( id, tanggalPeriksa, hasilAnalysis ) => {
	db.ref(`pasiens/${id}/${tanggalPeriksa}`).update({
		hasilAnalysis,
	});
};

export const doSimpanObatPasien = ( id, tanggalPeriksa, hasilObat ) => {
	db.ref(`pasiens/${id}/${tanggalPeriksa}`).update({
		hasilObat,
	});
};

export const doSimpanDaftarTunggu = ( uid, username ) => {
	const getter = db.ref(`daftarTunggu/${uid}`).update({
		username,
	});
	return getter;
};

export const onceGetUsers = () => {
	db.ref("users").once("value");
};

export const GetAllPasien = ( param1 ) => {
	const getter = db.ref(`users`).orderByChild("role").equalTo(`${param1}`).once("value");
	return getter;
};

export const GetPasienDaftarPeriksa = () => {
	const getter = db.ref("daftarTunggu").once("value");
	return getter;
};

export const GetRekamMedikPasien = (uid) => {
	const getter = db.ref(`pasiens/${uid}`).once("value");
	return getter;
};

export const GetSingleUsers = (uid) => {
	const resUser = db.ref(`users/${uid}`).once("value");
	return resUser;
};