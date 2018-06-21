import React from "react";
import { observer, inject } from "mobx-react/native";
import PasienPage from "../../stories/screens/PasienPage";
import { db } from "../../firebase";

export interface Props {
	navigation: any;
	pasienStore: any;
	mainStore: any;
}
export interface State {}

@inject ("pasienStore", "mainStore")
@observer
export default class PasienPageContainer extends React.Component<Props, State> {

	componentWillMount() {
		// console.log(this.props.mainStore.currentUserRole);
		const { currentUserRole } = this.props.mainStore;
		// const {key} = this.props.navigation.state.params.name ;
		if (currentUserRole === "dokter") {
			db.GetLihatDaftarTunggu().then(snapshot => {
				this.props.pasienStore.itemsPasien = snapshot.val();
				});
		} else if (currentUserRole === "resepsionis" ) {
			db.GetAllPasienStatusTungguNOK().then(snapshot => {
				snapshot.forEach(function(child1Snaps) {
					// db.GetSingleUsers(child1Snaps.key).then(child2Snaps =>  {
						// console.log(child2Snaps.val());
						// this.props.pasienStore.items2Pasien[child1Snaps.key] = "11"; //  child2Snaps.val();
						// console.log(child2Snaps.val());
					// });
					console.log(child1Snaps.key);
					console.log(child1Snaps.val());
				});
				this.props.pasienStore.itemsPasien = snapshot.val() ;
				// console.log(snapshot.val());
				// console.log("Daftar Pasien - will mount");
				// console.log(this.props);
			});
		} else if (currentUserRole === "billing") {
			db.GetAllPasienStatusBillingNOK().then(snapshot => {
				this.props.pasienStore.itemsPasien = snapshot.val();
				});
		} else if (currentUserRole === "apotek") {
			db.GetAllPasienStatusApotekNOK().then(snapshot => {
				this.props.pasienStore.itemsPasien = snapshot.val();
				});
		}

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
