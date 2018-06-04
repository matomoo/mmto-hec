import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
			List,
			ListItem,
			Card,
			CardItem,
} from "native-base";
// import _ from "lodash";

import styles from "./styles";
export interface Props {
	navigation: any;
	pasienTerpilih: any;
	pasienRekamMedik: any;
}
export interface State {}
class RekamMedikPasienPage extends React.Component<Props, State> {
	render() {
		const key = this.props.navigation.state.params.name.key;
		const aa = (this.props.pasienRekamMedik);
		// const array = Object.keys(aa).map(function(k) { return obj[k] });

		// console.log("Rekam Medik Pasien Screen");
		// console.log( aa );

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
					</Card>
					<Card>
							{ !!aa &&
								<List>
								{Object.keys(aa).map(keyx1 =>
										<ListItem
											key={keyx1}
											>
											<Left><Text>{keyx1}</Text></Left>
										</ListItem>,
									// )}
								)}
								</List>
							}
					</Card>
					<Card>
						<List>
							<ListItem
								key="1"
								onPress={() => this.props.navigation.navigate("InputAnalysis", {name : {key}} )}
								>
								<Left><Text>Input Diagnosa</Text></Left>
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

// const RekamMedikPasienList = ({users}) => (
// 	<List>
// 		{Object.keys(users).map(key => {Object.keys(users[key]).map(keyx =>
// 				<ListItem
// 					key={keyx}
// 					>
// 					{/* <Text>{users[key][keyx].hasilAnalysis}</Text> */}
// 				</ListItem>,

// 				// console.log(key + "\n" + keyx)

// 			)}
// 		)}
// 	</List>
// );

export default RekamMedikPasienPage;

// Object {
//   "QkSRDxoPUgTuFjgN38xdOYUGPVr1": Object {
//     "June 3, 2018 10:33 PM": Object {
//       "hasilAnalysis": "bbb",
//       "hasilObat": "111",
//     },
//     "June 3, 2018 10:36 PM": Object {
//       "hasilAnalysis": "aaa",
//       "hasilObat": "222",
//     },
//   },
// }