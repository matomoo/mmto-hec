import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
			List,
			ListItem,
			Card,
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	lists: any;
	onPilihPasien: Function;
}
export interface State {}
class PasienPage extends React.Component<Props, State> {

	render() {
		// console.log(this.props);

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Daftar Pasien</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Card>
					{/* <Text>Berisikan daftar pasien</Text> */}
					{ !!this.props.lists &&
						<List>
							{Object.keys(this.props.lists).map(key =>
								<ListItem
									key={key}
									onPress={() => this.props.navigation.navigate("RekamMedikPasien", {name: {key}} )}
									>
									<Left><Text>{this.props.lists[key].profil.username}</Text></Left>
									<Left><Text>{this.props.lists[key].profil.role}</Text></Left>
									<Right><Icon active name="ios-arrow-forward"/></Right>
								</ListItem>,
							)}
						</List>
					}
					</Card>
				</Content>
			</Container>
		);
	}
}

// const PasienList = ({users}) => {
// 	console.log(this.props);
// 	return (
// 	<List>
// 		{Object.keys(users).map(key =>
// 			<ListItem
// 				key={key}
// 				onPress={() => this.onPilihPasien(key)  }
// 				>
// 				<Left><Text>{users[key].username}</Text></Left>
// 				<Right><Icon active name="ios-arrow-forward"/></Right>
// 			</ListItem>,
// 		)}
// 	</List>
// );
// };

export default PasienPage;
