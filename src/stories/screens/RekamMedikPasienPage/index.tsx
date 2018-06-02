import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
			List,
			ListItem
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class RekamMedikPasienPage extends React.Component<Props, State> {
	render() {
		const key = this.props.navigation.state.params.name.key;
		//console.log(key);
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Profil Pasien</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text>{key}</Text>
					<List>
						<ListItem
							key="1"
							onPress={() => this.props.navigation.navigate("InputAnalysis", {name : {key}} )}
						>
							<Left><Text>Input Analysis</Text></Left>
							<Right><Icon active name="ios-arrow-forward"/></Right>
						</ListItem>
						<ListItem>
							<Left><Text>Input Obat</Text></Left>
							<Right><Icon active name="ios-arrow-forward"/></Right>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}

export default RekamMedikPasienPage;
