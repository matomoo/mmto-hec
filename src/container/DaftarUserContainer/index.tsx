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
	usernameInput: any;
	emailInput: any;
	pwdOneinput: any;
	pwdTwoinput: any;

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
				<Item error={form.UsernameError ? true : false}>
					<Icon active name="person" />
					<Input
						placeholder="Username"
						ref={c => (this.usernameInput = c)}
						value={form.username}
						onBlur={() => form.validateUsername()}
						onChangeText={e => form.usernameOnChange(e)}
					/>
				</Item>
				<Item error={form.emailError ? true : false}>
					<Icon active name="paper" />
					<Input
						placeholder="Email"
						keyboardType="email-address"
						ref={c => (this.emailInput = c)}
						value={form.email}
						onBlur={() => form.validateEmail()}
						onChangeText={e => form.emailOnChange(e)}
					/>
				</Item>
				<Item error={form.passworOnedError ? true : false}>
					<Icon active name="unlock" />
					<Input
						placeholder="Password"
						ref={c => (this.pwdOneinput = c)}
						value={form.passwordOne}
						onBlur={() => form.validatePasswordOne()}
						onChangeText={e => form.passwordOneOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
				<Item error={form.passwordTwoError ? true : false}>
					<Icon active name="unlock" />
					<Input
						placeholder="Konfirmasi Password"
						ref={c => (this.pwdOneinput = c)}
						value={form.passwordTwo}
						onBlur={() => form.validatePasswordTwo()}
						onChangeText={e => form.passwordTwoOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
			</Form>
		);
		return <DaftarUser daftarUserForm={Fields} onLogin={() => this.login()} />;
	}
}
