import React from "react";
import { observer, inject } from "mobx-react/native";
import DaftarBillingPage from "../../stories/screens/DaftarBillingPage";
import { db } from "../../firebase";

export interface Props {
	navigation: any;
	pasienStore: any;
	mainStore: any;
}
export interface State {}

@inject ("pasienStore", "mainStore")
@observer
export default class DaftarBillingPageContainer extends React.Component<Props, State> {

	componentWillMount() {
		// console.log(this.props.mainStore.currentUserRole);
		// const { currentUserRole } = this.props.mainStore;
		// const {key} = this.props.navigation.state.params.name ;
		db.GetLihatDaftarBilling().then(snapshot => {
			this.props.pasienStore.itemsPasien = snapshot.val();
			// console.log(this.props);
		});
	}

	pilihPasien ( keyx? ) {
		// this.props.pasienStore.currentPasienUid = keyx;
		console.log(keyx);
		// navigationx.navigate("RekamMedikPasien", {name: {keyx}} )
	}

	render() {
		// console.log(this.props.pasienStore.itemsPasien);
		let list = this.props.pasienStore.itemsPasien ? this.props.pasienStore.itemsPasien : undefined;
		return <DaftarBillingPage
					navigation={this.props.navigation}
					lists={list}
					onPilihPasien={() => this.pilihPasien()}
				/>;
	}
}
