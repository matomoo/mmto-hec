import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import DaftarUser from "./container/DaftarUserContainer";
import PasienPage from "./container/PasienPageContainer";
import RekamMedikPasien from "./container/RekamMedikPasienPageContainer";
import InputAnalysis from "./container/InputAnalysisPageContainer";
import InputObat from "./container/InputObatPageContainer";
import DaftarTungguPage from "./container/DaftarTungguPageContainer";
import DaftarBillingPage from "./container/DaftarBillingPageContainer";
import DetailBillingPasienPage from "./container/DetailBillingPasienPageContainer";
import InputDiagnosa from "./container/InputDiagnosaPageContainer";
import DaftarApotekPage from "./container/DaftarApotekPageContainer";
import DetailApotekPasienPage from "./container/DetailApotekPasienPageContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: props => <Sidebar {...props} />,
	},
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		DaftarUser: { screen: DaftarUser },
		PasienPage: { screen: PasienPage },
		BlankPage: { screen: BlankPage },
		RekamMedikPasien: {screen: RekamMedikPasien },
		InputAnalysis: { screen: InputAnalysis },
		InputObat: { screen: InputObat },
		DaftarTungguPage: { screen: DaftarTungguPage },
		DaftarBillingPage: { screen: DaftarBillingPage },
		DetailBillingPasienPage: { screen: DetailBillingPasienPage },
		DaftarApotekPage: { screen: DaftarApotekPage },
		DetailApotekPasienPage: { screen: DetailApotekPasienPage },
		InputDiagnosa: { screen: InputDiagnosa },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	},
);

export default () => (
	<Root>
		<App />
	</Root>
);
