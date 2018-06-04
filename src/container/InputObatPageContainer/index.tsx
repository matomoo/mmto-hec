import * as React from "react";
import { Item, Input, Form, Label,
			//Left,
			Text
			} from "native-base";
import { observer, inject } from "mobx-react/native";
import InputObatPage from "../../stories/screens/InputObatPage";
import { db } from "../../firebase";
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
export default class InputObatPageContainer extends React.Component<Props, State> {
	obatInput: any

	constructor(props){
		super(props);
		props.pasienStore.currentPasienUid = props.navigation.state.params.name.key;
		// console.log("Input Obat Container");
		// console.log(props);
	}
	
	onSimpanKeTabelPasien = () => {
		const dateToFormat = new Date();
		db.doSimpanObatPasien(this.props.pasienStore.currentPasienUid, moment(dateToFormat).format("DD-MMM-YYYY"), this.props.pasienStore.obat);
		//const key = this.props.pasienStore.currentPasienUid;
		//this.props.navigation.navigate("RekamMedikPasien", {name: {key}});
		this.props.navigation.goBack();
	}

	onNavigationBack= () => {
		this.props.navigation.goBack();
	}

	render() {
		const form = this.props.pasienStore;
		
		const Fields = (
			<Form>
				<Item 
					stackedLabel 
					bordered
					>
						<Label>Nama Pasien</Label>
						<Text>{form.currentPasienUsername}</Text>
				</Item>
				<Item 
					stackedLabel 
					bordered
					>
					<Label>Input Obat</Label>
					<Input
						ref={c => (this.obatInput = c)}
						onChangeText={e => form.obatOnChange(e)}
						multiline={true}							
						numberOfLines={10}
						style={{ height: 200, marginLeft: 10, marginTop: 10, textAlignVertical: "top" }}
					/>
				</Item>
			</Form>
		)
		return <InputObatPage 
					inputObatForm={Fields}
					navigationBack={this.onNavigationBack} 
					onSimpan={this.onSimpanKeTabelPasien}
					/>;
	}
}
