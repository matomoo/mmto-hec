import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";
import data from "./data";
import { db } from "../../firebase";

export interface Props {
	navigation: any;
	mainStore: any;
}
export interface State {}

@inject("mainStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {

	componentWillMount() {
		this.props.mainStore.fetchItems(data);
		db.GetSingleUsers(this.props.mainStore.currentUid).then(snapshot => {
			this.props.mainStore.currentUsername = snapshot.val().username;
			this.props.mainStore.currentUserRole = snapshot.val().role;
			// console.log(this.props.mainStore.currentUsername);
		});
		console.log(this.props);

	}
	render() {
		const list = this.props.mainStore.items.toJS();
		return <Home
			navigation={this.props.navigation}
			list={list}
			authUser={this.props.mainStore.currentUsername}
			authRole={this.props.mainStore.currentUserRole}
			authUid={this.props.mainStore.currentUid}
		/>;
	}
}
