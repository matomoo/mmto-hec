import * as React from "react";
import { observer, inject } from "mobx-react/native";
import _ from "lodash";

import RekamMedikPasienPage from "../../stories/screens/RekamMedikPasienPage";
export interface Props {
	navigation: any,
	pasienStore: any;
}

export interface State {}

@inject ("pasienStore")
@observer
export default class RekamMedikPasienPageContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		//console.log("Rekam Medik Pasien Container");
	}

	render() {
		const arr = _.map( this.props.pasienStore.itemsPasien, (value, key) => ({key,value}) )
		const objPasienTerpilih = _.find(
					arr,
					{key : this.props.navigation.state.params.name.key}
				);
		this.props.pasienStore.currentPasienUsername = objPasienTerpilih.value.username;
		
		return <RekamMedikPasienPage 
					navigation={this.props.navigation} 
					pasienTerpilih = {objPasienTerpilih}
					/>;
	}
}
