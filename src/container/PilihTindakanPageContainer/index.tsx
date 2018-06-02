import * as React from "react";
import PilihTindakanPage from "../../stories/screens/PilihTindakanPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class PilihTindakanPageContainer extends React.Component<Props, State> {
	render() {
		return <PilihTindakanPage navigation={this.props.navigation} />;
	}
}
