import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
			List,
			ListItem,			
			Card
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	lists: any;
}
export interface State {}
class PasienPage extends React.Component<Props, State> {
	render() {
		//console.log(this.props.lists);

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
					{ !!this.props.lists && <PasienList users={this.props.lists} navigation={this.props.navigation} /> }
					</Card>
				</Content>
			</Container>
		);
	}
}

const PasienList = ({users, navigation}) => (
	<List>
		{Object.keys(users).map(key =>
			<ListItem 
				key={key}
				onPress={() => navigation.navigate("PilihTindakan", {name: {key}} )}
				>
				<Left><Text>{users[key].username}</Text></Left>
				<Right><Icon active name="ios-arrow-forward"/></Right>
			</ListItem>
		)}
	</List>
)

export default PasienPage;
