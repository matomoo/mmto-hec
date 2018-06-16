import * as React from "react";
import { Item, Input, Form, Label,
			Text,
			Content,
			ListItem,
			CheckBox,
			Body,
			} from "native-base";
import { observer, inject } from "mobx-react/native";
import InputObatPage from "../../stories/screens/InputObatPage";
import { db } from "../../firebase";
// import Moment from "react-moment";
import moment from "moment";
import dataDefaultObat from "./dataDefaultObat";

export interface Props {
	navigation: any;
	pasienStore: any;
	mainStore: any;
	inputDiagnosaStore: any;
}
export interface State {}

@inject("pasienStore", "inputDiagnosaStore")
@observer
export default class InputObatPageContainer extends React.Component<Props, State> {
	obatInput: any;

	constructor(props) {
		super(props);
		props.pasienStore.currentPasienUid = props.navigation.state.params.name.key;
		// console.log("Input Obat Container");
		// console.log(props);
	}

	toggleSwitch1() {
		this.props.inputDiagnosaStore.checkbox1 = !this.props.inputDiagnosaStore.checkbox1;
		// this.props.inputDiagnosaStore.addListItem(dataDefaultObat[0].namaObat );
		// console.log(this.props.inputDiagnosaStore.selectedDiagnosa);
		}
	toggleSwitch2() {
		this.props.inputDiagnosaStore.checkbox2 = !this.props.inputDiagnosaStore.checkbox2;
		// this.props.inputDiagnosaStore.addListItem(dataDefaultObat[1].namaObat );
		// console.log(this.props.inputDiagnosaStore.selectedDiagnosa);
	}
	toggleSwitch3() {
		this.props.inputDiagnosaStore.checkbox3 = !this.props.inputDiagnosaStore.checkbox3;
		// this.props.inputDiagnosaStore.addListItem(dataDefaultObat[2].namaObat );
		// console.log(this.props.inputDiagnosaStore.selectedDiagnosa);
	}

	onSimpanKeTabelPasien = () => {
		const dateToFormat = new Date();
		if (this.props.inputDiagnosaStore.checkbox1) {
			this.props.inputDiagnosaStore.addListItem(dataDefaultObat[0].namaObat, dataDefaultObat[0].harga );
		}
		if (this.props.inputDiagnosaStore.checkbox2) {
			this.props.inputDiagnosaStore.addListItem(dataDefaultObat[1].namaObat, dataDefaultObat[1].harga );
		}
		if (this.props.inputDiagnosaStore.checkbox3) {
			this.props.inputDiagnosaStore.addListItem(dataDefaultObat[2].namaObat, dataDefaultObat[2].harga );
		}
		db.doSimpanObatPasien(
				this.props.pasienStore.currentPasienTerpilihUid,
				moment(dateToFormat).format("DD-MMM-YYYY"),
				JSON.stringify(this.props.inputDiagnosaStore.selectedDiagnosa));
		// console.log(this.props.inputDiagnosaStore.selectedDiagnosa);
		this.props.navigation.goBack();
		this.props.inputDiagnosaStore.resetForm();
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
		);

		const PilihanObat = (
			<Content>
				<ListItem button onPress={() => this.toggleSwitch1()}>
					<CheckBox
					checked={this.props.inputDiagnosaStore.checkbox1}
					onPress={() => this.toggleSwitch1()}
					/>
					<Body>
					<Text>{dataDefaultObat[0].namaObat}</Text>
					</Body>
				</ListItem>
				<ListItem button onPress={() => this.toggleSwitch2()}>
					<CheckBox
					checked={this.props.inputDiagnosaStore.checkbox2}
					onPress={() => this.toggleSwitch2()}
					/>
					<Body>
					<Text>{dataDefaultObat[1].namaObat}</Text>
					</Body>
				</ListItem>
				<ListItem button onPress={() => this.toggleSwitch3()}>
					<CheckBox
					checked={this.props.inputDiagnosaStore.checkbox3}
					onPress={() => this.toggleSwitch3()}
					/>
					<Body>
					<Text>{dataDefaultObat[2].namaObat}</Text>
					</Body>
				</ListItem>
			</Content>

		);

		return <InputObatPage
					inputObatForm={Fields}
					navigationBack={this.onNavigationBack}
					onSimpan={this.onSimpanKeTabelPasien}
					pilihanObat={PilihanObat}
					/>;
	}
}
