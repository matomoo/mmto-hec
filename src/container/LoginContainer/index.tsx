// @flow
import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { observer, inject } from "mobx-react/native";
import { AsyncStorage } from "react-native";
import { auth } from "../../firebase";
import Login from "../../stories/screens/Login";

export interface Props {
	navigation: any;
	loginForm: any;
	mainStore: any;
}
export interface State {}

@inject("loginForm", "mainStore")
@observer
export default class LoginContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	login() {
		this.props.loginForm.validateForm();
		if (this.props.loginForm.isValid) {
			auth.doSignInWithEmailAndPassword(this.props.loginForm.email, this.props.loginForm.password)
				.then((authUser) => {
					// this.isValid = true;
					// console.log(authUser);
					this.props.mainStore.currentUid = authUser.user.uid;
					this.props.loginForm.clearStore();
					this.props.navigation.navigate("Drawer");
					// console.log(authUser.user.uid);
					try {
						AsyncStorage.setItem("@HEC2:key", authUser.user.uid);
						} catch (error) {
						// Error saving data
						}
				})
				.catch(error => {
					this.props.loginForm.responseFirebase = error.message;
					Toast.show({
						text: error.message,
						duration: 2000,
						position: "top",
						textStyle: { textAlign: "center" },
					});
				});
		} else {
			Toast.show({
				text: "Enter Valid Email & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	cekAuthUser = async () => {
		try {
			const value = await AsyncStorage.getItem("@HEC2:key");
				if (value !== null) {
					// We have data!!
					console.log(value);
				}
		} catch (error) {
		// Error retrieving data
		}
	}

	signup() {
		this.props.navigation.navigate("DaftarUser");
	}
	render() {
		// this.cekAuthUser();
		const form = this.props.loginForm;
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
		return <Login
			loginForm={Fields}
			onLogin={() => this.login()}
			onSignUp={() => this.signup()}
		/>;
	}
}
