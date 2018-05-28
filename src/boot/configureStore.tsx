import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import DaftarUserStore from "../store/ViewStore/DaftarUserViewStore";

export default function() {
	const mainStore = new MainStore();
	const loginForm = new LoginStore();
	const daftarUserForm = new DaftarUserStore();

	return {
		loginForm,
		mainStore,
		daftarUserForm,
	};
}
