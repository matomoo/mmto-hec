import * as React from "react";
import RekamMedikPasienPage from "../../stories/screens/RekamMedikPasienPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class RekamMedikPasienPageContainer extends React.Component<Props, State> {
	
	// tambahKeTabelPasien() {
	// 	this.props.loginForm.validateForm();
	// }

	render() {
		return <RekamMedikPasienPage navigation={this.props.navigation} />;
	}
}
