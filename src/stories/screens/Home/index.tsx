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
  List,
  ListItem,
  Card,
  CardItem,
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
  authUser: any;
  authRole: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    const cardAdmin = (
      <List>
        <ListItem>
          <Text>Ubah User Role</Text>
        </ListItem>
      </List>
    );

    const cardDokter = (
      <List>
        <ListItem
          key="1"
          >
          <Text>Daftar Pasien</Text>
        </ListItem>
      </List>
    );
    
    let selectedCard;
    if (this.props.authRole === "admin") {
      selectedCard = cardAdmin;
    } else if (this.props.authRole === "dokter") {
      selectedCard = cardDokter;
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
        <Content>
          <Card>
            <CardItem header>
              <Body>
                <Text>{this.props.authUser}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                  {selectedCard}                 
              </Body>
            </CardItem>
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