import * as React from "react";
import { observer, inject } from "mobx-react/native";
import PasienPage from "../../stories/screens/PasienPage";
import { db } from "../../firebase";

export interface Props {
	navigation: any;
	pasienStore: any;
}
export interface State {}

@inject ("pasienStore")
@observer
export default class PasienPageContainer extends React.Component<Props, State> {

	componentWillMount() {
		db.GetAllPasien().then(snapshot => {
			this.props.pasienStore.itemsPasien = snapshot.val() ;
			// console.log("Daftar Pasien");
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
		return <PasienPage
					navigation={this.props.navigation}
					lists={list}
					onPilihPasien={() => this.pilihPasien()}
				/>;
	}
}
