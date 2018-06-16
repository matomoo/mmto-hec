import * as React from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
	Card,
	CardItem,
	List,
	ListItem,
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	list: any;
	authUser: any;
	authRole: any;
	authUid: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
	render() {
		const key = this.props.authUid;
		const cardAdmin = (
			<CardItem
					button
					// onPress={() => this.props.navigation.navigate("PasienPage")}
					>
					<Left><Text>Ubah Role</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</CardItem>
		);

		const cardDokter = (
				<CardItem
					button
					onPress={() => this.props.navigation.navigate("PasienPage")} >
					<Left><Text>Daftar Pasien Periksa</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</CardItem>
		);

		const cardPasien = (
			<CardItem
				button
				onPress={() => this.props.navigation.navigate("RekamMedikPasien", {name: {key}} )}
				>
				<Left><Text>Riwayat Rekam Medik</Text></Left>
				<Right><Icon active name="ios-arrow-forward"/></Right>
			</CardItem>
		);

		const cardResepsionis = (
			<List>
				<ListItem
					button
					onPress={() => this.props.navigation.navigate("PasienPage")}
					>
					<Left><Text>List Daftar Semua Pasien</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</ListItem>
				<ListItem
					button
					onPress={() => this.props.navigation.navigate("DaftarTungguPage")}
					>
					<Left><Text>Lihat Daftar Tunggu</Text></Left>
					<Right><Icon active name="ios-arrow-forward"/></Right>
				</ListItem>
			</List>
		);

		let selectedCard;
		if (this.props.authRole === "admin") {
			selectedCard = cardAdmin;
		} else if (this.props.authRole === "dokter") {
			selectedCard = cardDokter;
		} else if (this.props.authRole === "pasien") {
			selectedCard = cardPasien;
		} else if (this.props.authRole === "resepsionis") {
			selectedCard = cardResepsionis;
		}

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent>
							<Icon
								active
								name="menu"
								onPress={() => this.props.navigation.navigate("DrawerOpen")}
							/>
						</Button>
					</Left>
					<Body>
						<Title>Dashboard</Title>
					</Body>
					<Right />
				</Header>
				<Content style={styles.content}>
					<Card>
						<CardItem header>
							<Body>
								<Text>Selamat Datang, {this.props.authUser}</Text>
							</Body>
						</CardItem>
					</Card>
					<Card>
						{selectedCard}
					</Card>
				</Content>
			</Container>
		);
	}
}

export default Home;

{/* <List>
	{this.props.list.map((item, i) => (
		<ListItem
			key={i}
			onPress={() =>
				this.props.navigation.navigate("BlankPage", {
					name: { item }
				})}
		>
			<Text>{item}</Text>
		</ListItem>
	))}
</List> */}