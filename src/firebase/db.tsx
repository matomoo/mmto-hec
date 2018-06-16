import { db } from "./firebase";
// import { promisify } from "es6-promisify";

export const doCreateUser = ( id, username, email, role ) => {
	db.ref(`users/${id}`).update({
		username,
		email,
		role,
	});
	db.ref(`pasiens/${id}/profil`).update({
		username,
		email,
		role,
	});
	db.ref(`pasiens/${id}`).update({
		daftarTunggu: "nok",
	});
};

export const doSimpanDiagnosaPasien = ( id, tanggalPeriksa, hasilDiagnosa ) => {
	db.ref(`pasiens/${id}/rekamMedik/${tanggalPeriksa}`).update({
		hasilDiagnosa,
		statusDiagnosa : "ok",
		statusBilling : "nok",
		statusApotek: "nok",
	});
};

export const doSimpanObatPasien = ( id, tanggalPeriksa, hasilObat ) => {
	db.ref(`pasiens/${id}/rekamMedik/${tanggalPeriksa}`).update({
		hasilObat,
		statusObat : "ok",
		statusBilling : "nok",
		statusApotek: "nok",
	});
};

export const doSimpanDaftarTunggu = ( uid ) => {
	const getter = db.ref(`pasiens/${uid}`).update({
		daftarTunggu : "ok",
	});
	return getter;
};

export const onceGetUsers = () => {
	db.ref("users").once("value");
};

export const GetAllPasien = ( param1 ) => {
	const getter = db.ref(`pasiens`).orderByChild("role").equalTo(`${param1}`).once("value");
	return getter;
};

export const GetAllPasienStatusTungguNOK = () => {
	const getter = db.ref(`pasiens`).orderByChild("daftarTunggu").equalTo("nok").once("value");
	return getter;
};

export const GetLihatDaftarTunggu = () => {
	const getter = db.ref("pasiens").orderByChild("daftarTunggu").equalTo("ok").once("value");
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