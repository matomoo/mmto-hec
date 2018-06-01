import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import DaftarUserStore from "../store/ViewStore/DaftarUserViewStore";
//import SessionStore from "../store/SessionStore/index";

export default function() {
	const mainStore = new MainStore();
	const loginForm = new LoginStore();
	const daftarUserForm = new DaftarUserStore();
	//const sessionStore = new SessionStore();

	return {
		loginForm,
		mainStore,
		daftarUserForm,
		//sessionStore,
	};
}
