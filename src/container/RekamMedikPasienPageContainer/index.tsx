import * as React from "react";
import { observer, inject } from "mobx-react/native";
import _ from "lodash";
import { db } from "../../firebase";

import RekamMedikPasienPage from "../../stories/screens/RekamMedikPasienPage";
export interface Props {
	navigation: any;
	pasienStore: any;
}

export interface State {}

@inject ("pasienStore")
@observer
export default class RekamMedikPasienPageContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		// console.log("Rekam Medik Pasien Container - Constructor");
	}
	// componentDidMount(){
	// 	console.log("Rekam Medik Pasien Container - DidMount");
	// }
	componentWillMount() {
		db.GetRekamMedikPasien(this.props.navigation.state.params.name.key).then(snapshot => {
			this.props.pasienStore.itemsRekamMedikPasien = snapshot.val() ;

			// this.props.pasienStore.itemsRekamMedikPasien = _.map(snapshot.val(), (value, key) => ({key, value}) )
			// const arrRekamMedikPasien = _.map(this.props.pasienStore.itemRekamMedikPasien, (value, key) => ({key, value}) )
			// console.log("Rekam Medik Pasien Container - WillMount");
			// console.log(this.props);
			// console.log(this.props.pasienStore.currentPasienUid);
			// console.log(snapshot.val());
		});
		const arr = _.map( this.props.pasienStore.itemsPasien, (value, key) => ({key, value}) );

		const objPasienTerpilih = _.find(
					arr,
					{key : this.props.navigation.state.params.name.key},
				);
		// console.log(this.props.navigation.state.params.name.key)
		// console.log(this.props.navigation.state.params.name.key);
		this.props.pasienStore.currentPasienUsername = objPasienTerpilih.value.username;
		this.props.pasienStore.currentPasienUid = this.props.navigation.state.params.name.key;

	}

	render() {

		console.log("Rekam Medik Pasien Container - Render");
		// console.log(objPasienTerpilih);
		// console.log(this.props.pasienStore);
		const { currentPasienUsername } = this.props.pasienStore;

		return <RekamMedikPasienPage
					navigation={this.props.navigation}
					pasienUsername = {currentPasienUsername}
					pasienRekamMedik = {this.props.pasienStore.itemsRekamMedikPasien ? this.props.pasienStore.itemsRekamMedikPasien : undefined }
					/>;
		// return <RekamMedikPasienPage
		// 			navigation={this.props.navigation}
		// 			pasienRekamMedik = {this.props.pasienStore.itemsRekamMedikPasien ? this.props.pasienStore.itemsRekamMedikPasien : undefined }
		// />;
	}
}
