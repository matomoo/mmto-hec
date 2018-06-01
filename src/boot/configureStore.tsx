import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import DaftarUserStore from "../store/ViewStore/DaftarUserViewStore";
import PasienStore from "../store/DomainStore/PasienStore";

export default function() {
	const mainStore = new MainStore();
	const loginForm = new LoginStore();
	const daftarUserForm = new DaftarUserStore();
	const pasienStore = new PasienStore();

	return {
		loginForm,
		mainStore,
		daftarUserForm,
		pasienStore,
	};
}
