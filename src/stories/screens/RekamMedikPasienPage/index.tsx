import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
			List,
			ListItem,
			Card,
			CardItem
} from "native-base";


import styles from "./styles";
export interface Props {
	navigation: any;
	pasienTerpilih: any;
}
export interface State {}
class RekamMedikPasienPage extends React.Component<Props, State> {
	render() {
		const key = this.props.navigation.state.params.name.key;
		//console.log("Rekam Medik Pasien Screen");
		//console.log(this.props);
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
					<Card>
						<CardItem>
							<Left>
								<Text>{this.props.pasienTerpilih.value.username}</Text>
							</Left>
						</CardItem>
						<CardItem>
							<Text>Riwayat Rekam Medik</Text>
						</CardItem>
					</Card>
					<Card>	
						<List>
							<ListItem
								key="1"
								onPress={() => this.props.navigation.navigate("InputAnalysis", {name : {key}} )}
							>
								<Left><Text>Input Analysis</Text></Left>
								<Right><Icon active name="ios-arrow-forward"/></Right>
							</ListItem>
							<ListItem
								key="2"
								onPress={() => this.props.navigation.navigate("InputObat", {name : {key}} )}
							>
								<Left><Text>Input Obat</Text></Left>
								<Right><Icon active name="ios-arrow-forward"/></Right>
							</ListItem>
						</List>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default RekamMedikPasienPage;
