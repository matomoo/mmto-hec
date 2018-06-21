import * as React from "react";
import { Item, Input, Form, Label,
			// Left,
			Text,
			} from "native-base";
import { observer, inject } from "mobx-react/native";
import InputAnalysisPage from "../../stories/screens/InputAnalysisPage";
import { db } from "../../firebase";
// import Moment from "react-moment";
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
	analysisInput: any;

	constructor(props) {
		super(props);
		// props.pasienStore.currentPasienUid = props.navigation.state.params.name.key;
		// console.log("Input Analysis Container");
		// console.log(props);
	}

	onSimpanKeTabelPasien = () => {
		const dateToFormat = new Date();
		db.doSimpanDiagnosaPasien(
			this.props.pasienStore.currentPasienTerpilihUid,
			moment(dateToFormat).format("DD-MMM-YYYY"),
			this.props.pasienStore.analysis);
		// this.props.navigation.navigate("RekamMedikPasien");
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
						<Text>{form.currentPasienTerpilihUsername}</Text>
				</Item>
				<Item
					stackedLabel
					bordered
					>
					<Label>Input Diagnosa</Label>
					<Input
						ref={c => (this.analysisInput = c)}
						onChangeText={e => form.analysisOnChange(e)}
						multiline={true}
						numberOfLines={10}
						style={{ height: 200, marginLeft: 10, marginTop: 10, textAlignVertical: "top" }}
					/>
				</Item>
			</Form>
		);

		return <InputAnalysisPage
					inputAnalysisForm={Fields}
					navigationBack={this.onNavigationBack}
					onSimpan={this.onSimpanKeTabelPasien}
					/>;
	}
}
