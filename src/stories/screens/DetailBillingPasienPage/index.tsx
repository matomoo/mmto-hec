import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
			List,
			ListItem,
			Card,
			CardItem,
			H2,
			// Accordion,
} from "native-base";
// import _ from "lodash";

import styles from "./styles";

export interface Props {
	navigation: any;
	pasienUsername: any;
	pasienRekamMedik: any;
	userRole: any;
	onSimpanPasienKeDaftarBilling: Function;
}
export interface State {}
class DetailBillingPasienPage extends React.Component<Props, State> {
	rmDiagTitle: any;
	rmDiagContent: any;
	rmObatTitle: any;
	rmObatContent: any;

	listDetailRekamMedik = () => {
		const aax = this.props.pasienRekamMedik;
		// console.log("aax");
		// console.log(aax);
		try {
			Object.keys(aax).map(keyx1 => {
				this.rmDiagTitle = keyx1;
				this.rmDiagContent = JSON.parse(aax[keyx1].hasilDiagnosa);
				this.rmObatTitle = keyx1;
				this.rmObatContent = JSON.parse(aax[keyx1].hasilObat);
				},
			);
		} catch  (error) {
			// console.log(error);
		}
		// console.log(this.rmDiagTitle);
		// console.log(this.rmDiagContent);
	}

	render() {
		// const key = this.props.navigation.state.params.name.key;
		// const aa = (this.props.pasienRekamMedik);
		this.listDetailRekamMedik();
		// console.log(this.rmDiagTitle);
		// console.log(this.rmDiagContent);
		// console.log("Rekam Medik Pasien Screen");
		// console.log( this.props.pasienUsername );

		const menuBilling = (
			<List>
				<ListItem
					key="1"
					onPress={() => this.props.onSimpanPasienKeDaftarBilling() }
					>
					<Left><Text>Konfirmasi Pembayaran</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</ListItem>
				{/* <ListItem
					key="3"
					// onPress={() => this.props.navigation.navigate("InputDiagnosa", {name : {key}} )}
					>
					<Left><Text>Lihat Billing</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</ListItem> */}
			</List>
		);

		let selectedCard;
		if (this.props.userRole === "admin") {
			// selectedCard = cardAdmin;
		} else if (this.props.userRole === "billing") {
			selectedCard = menuBilling;
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
						<Title>Detail Billing Pasien</Title>
					</Body>
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
					<Text><H2>Riwayat Rekam Medik</H2></Text>
					<Card>
						{ <List>
							<ListItem key="0"><Text>{this.rmDiagTitle}</Text></ListItem>
							<ListItem key="1"><Text>Hasil Diagnosa</Text></ListItem>
							{!!this.rmDiagContent &&
								this.rmDiagContent.map(element =>
									<ListItem
										key = {element}
									>
										<Left><Text>{"  - "}{element.name}</Text></Left>
										<Right><Text>{element.harga}</Text></Right>
									</ListItem>,
							)}
						</List>
						}
						{ <List>
							<ListItem key="1"><Text>Hasil Obat</Text></ListItem>
							{!!this.rmObatContent &&
								this.rmObatContent.map(element =>
									<ListItem
										key = {element}
									>
										<Left><Text>{"  - "}{element.name}</Text></Left>
										<Right><Text>{element.harga}</Text></Right>
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

export default DetailBillingPasienPage;