// @flow
import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { observer, inject } from "mobx-react/native";

import DaftarUser from "../../stories/screens/DaftarUser";

export interface Props {
	navigation: any;
	daftarUserForm: any;
}
export interface State {}

@inject("daftarUserForm")
@observer
export default class DaftarUserContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	login() {
		this.props.daftarUserForm.validateForm();
		if (this.props.daftarUserForm.isValid) {
			//console.log(this.props);
			this.props.daftarUserForm.clearStore();
			this.props.navigation.navigate("Drawer");
		} else {
			Toast.show({
				text: "Enter Valid Email & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}
	render() {
		const form = this.props.daftarUserForm;
		const Fields = (
			<Form>
				<Item error={form.emailError ? true : false}>
					<Icon active name="person" />
					<Input
						placeholder="Email"
						keyboardType="email-address"
						ref={c => (this.emailInput = c)}
						value={form.email}
						onBlur={() => form.validateEmail()}
						onChangeText={e => form.emailOnChange(e)}
					/>
				</Item>
				<Item error={form.passwordError ? true : false}>
					<Icon active name="unlock" />
					<Input
						placeholder="Password"
						ref={c => (this.pwdinput = c)}
						value={form.password}
						onBlur={() => form.validatePassword()}
						onChangeText={e => form.passwordOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
			</Form>
		);
		return <DaftarUser daftarUserForm={Fields} onLogin={() => this.login()} />;
	}
}
