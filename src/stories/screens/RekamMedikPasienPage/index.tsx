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
	pasienUsername: any;
	pasienRekamMedik: any;
	userRole: any;
	onSimpanPasienKeDaftarPeriksa: Function;
}
export interface State {}
class RekamMedikPasienPage extends React.Component<Props, State> {
	render() {
		const key = this.props.navigation.state.params.name.key;
		const aa = (this.props.pasienRekamMedik);
		// const array = Object.keys(aa).map(function(k) { return obj[k] });

		// console.log("Rekam Medik Pasien Screen");
		// console.log( this.props.pasienUsername );

		const menuResepsionis = (
			<List>
				<ListItem
					key="3"
					onPress={() => this.props.onSimpanPasienKeDaftarPeriksa() }
					>
					<Left><Text>Input Ke Daftar Tunggu</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</ListItem>
			</List>
		);

		const menuDokter = (
			<List>
				{/* <ListItem
					key="1"
					onPress={() => this.props.navigation.navigate("InputAnalysis", {name : {key}} )}
					>
					<Left><Text>Input Diagnosa</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</ListItem> */}
				<ListItem
					key="2"
					onPress={() => this.props.navigation.navigate("InputObat", {name : {key}} )}
					>
					<Left><Text>Input Obat</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</ListItem>
				<ListItem
					key="3"
					onPress={() => this.props.navigation.navigate("InputDiagnosa", {name : {key}} )}
					>
					<Left><Text>Input Diagnosa 2</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</ListItem>
			</List>
		);

		let selectedCard;
		if (this.props.userRole === "admin") {
			// selectedCard = cardAdmin;
		} else if (this.props.userRole === "dokter") {
			selectedCard = menuDokter;
		} else if (this.props.userRole === "pasien") {
			// selectedCard = cardPasien;
		} else if (this.props.userRole === "resepsionis") {
			selectedCard = menuResepsionis;
		}

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
								<Text>
									{this.props.pasienUsername}
									</Text>
							</Left>
						</CardItem>
					</Card>
					<Card>
						{ !!aa &&
							<List>
							<ListItem><Text>Riwayat Rekam Medik</Text></ListItem>
							{Object.keys(aa).map(keyx1 =>
									<ListItem
										key={keyx1}
										>
										<Left><Text>{keyx1}</Text></Left>
										<Right><Icon active name="ios-arrow-forward"/></Right>
									</ListItem>,
							)}
							</List>
						}
					</Card>
					<Card>
						{selectedCard}
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