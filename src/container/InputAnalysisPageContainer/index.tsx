import * as React from "react";
import { Item, Input, Form, Label,
			Left,
			Text
			} from "native-base";
import { observer, inject } from "mobx-react/native";
import InputAnalysisPage from "../../stories/screens/InputAnalysisPage";
//import { db } from "../../firebase";
//import Moment from "react-moment";
import moment from "moment";

export interface Props {
	navigation: any;
	pasienStore: any;
	mainStore: any;
}
export interface State {}

@inject("pasienStore")
@observer
export default class InputAnalysisPageContainer extends React.Component<Props, State> {
	analysisInput: any

	constructor(props){
		super(props);
		props.pasienStore.currentPasienUid = props.navigation.state.params.name.key;
		//console.log(props.pasienStore.currentPasienUid);
		// this.params = props;
		// console.log(this.params);
		//console.log(props);
		//console.log(this.props.navigation.state.);
	}
	
	onSimpanKeTabelPasien = () => {
		//this.props.pasienForm.validateForm();
		//console.log(this.props);
		//this.params = props; //.navigation.state.params.name.key;
		console.log(this.props);
		console.log(this.props.pasienStore.currentPasienUid);
		const dateToFormat = new Date();
        console.log(moment(dateToFormat).format("LLL"));
		//db.doSimpanPasien(this.props.pasienStore.currentPasienUid, dateToFormat, this.props.pasienStore);
	}

	onNavigationBack(){
		this.props.navigation.goBack();
	}

	render() {
		//console.log(this.props.navigation.state.params.name.key);
		//this.props.pasienStore.currentPasienUid = this.props.navigation.state.params.name.key;
		//console.log(this.props.pasienStore.currentPasienUid);
		const form = this.props.pasienStore;
		
		const Fields = (
			<Form>
				<Item 
					stackedLabel 
					bordered
					//style={styles.Item}
					>
					<Label>Nama Pasien</Label>
					<Left><Text>Username</Text></Left>
				</Item>
				<Item 
					stackedLabel 
					bordered
					//style={styles.Item}
					>
					<Label>Input Analysis</Label>
					<Input
						ref={c => (this.analysisInput = c)}
						onChangeText={e => form.analysisOnChange(e)}
						multiline={true}							
						numberOfLines={10}
						style={{ height: 200, marginLeft: 10, marginTop: 10, textAlignVertical: "top" }}
					/>
				</Item>
			</Form>
		)
		return <InputAnalysisPage 
					inputAnalysisForm={Fields}
					navigationBack={this.onNavigationBack} 
					onSimpan={this.onSimpanKeTabelPasien}
					/>;
	}
}
