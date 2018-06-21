import * as React from "react";
import { observer, inject } from "mobx-react/native";
// import _ from "lodash";
import { db } from "../../firebase";

import DetailApotekPasienPage from "../../stories/screens/DetailApotekPasienPage";
export interface Props {
	navigation: any;
	pasienStore: any;
	mainStore: any;
}

export interface State {}

@inject ("pasienStore", "mainStore")
@observer
export default class DetailApotekPasienPageContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		// console.log("Rekam Medik Pasien Container - Constructor");
		// console.log(this.props);
	}
	// componentDidMount(){
	// 	console.log("Rekam Medik Pasien Container - DidMount");
	// }
	componentWillMount() {
		db.GetRekamMedikPasien(this.props.navigation.state.params.name.key).then(snapshot => {
			this.props.pasienStore.itemsRekamMedikPasien = snapshot.val() ;
			this.props.pasienStore.currentPasienTerpilihUsername = this.props.pasienStore.itemsRekamMedikPasien.profil.username;
			this.props.pasienStore.currentPasienTerpilihUid = this.props.navigation.state.params.name.key;
		});
		// const arr = _.map( this.props.pasienStore.itemsPasien, (value, key) => ({key, value}) );

		// const objPasienTerpilih = _.find(
		// 			arr,
		// 			{key : this.props.navigation.state.params.name.key},
		// 		);
		// // console.log(this.props.navigation.state.params.name.key)
		// // console.log(objPasienTerpilih);
		// this.props.pasienStore.currentPasienTerpilihUsername = objPasienTerpilih.value.username;
		// this.props.pasienStore.currentPasienTerpilihUid = this.props.navigation.state.params.name.key;
		// // this.props.pasienStore.currentPasienRole = objPasienTerpilih.value.role;
	}

	simpanPasienKeDaftarApotek() {
		db.doUpdateStatusApotekPasien(this.props.navigation.state.params.name.key);
		this.props.navigation.navigate("PasienPage");
	}

	render() {
		// console.log("Rekam Medik Pasien Container - Render");
		// console.log(this.props);

		const { currentPasienTerpilihUsername } = this.props.pasienStore;
		const { currentUserRole } = this.props.mainStore;
		const { rekamMedik } = this.props.pasienStore.itemsRekamMedikPasien;

		return <DetailApotekPasienPage
					navigation={this.props.navigation}
					pasienUsername = {currentPasienTerpilihUsername}
					pasienRekamMedik = { rekamMedik }
					userRole = {currentUserRole}
					onSimpanPasienKeDaftarApotek = {() => this.simpanPasienKeDaftarApotek()}
					/>;
		// return <DetailApotekPasienPage
		// 			navigation={this.props.navigation}
		// 			pasienRekamMedik = {this.props.pasienStore.itemsRekamMedikPasien ? this.props.pasienStore.itemsRekamMedikPasien : undefined }
		// />;
	}
}
