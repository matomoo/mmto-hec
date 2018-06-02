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
class PilihTindakanPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		console.log(param.name.key);
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Pilih Tindakan</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text>{param.name.item}</Text>
					<List>
						<ListItem>
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

export default PilihTindakanPage;
