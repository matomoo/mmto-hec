import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,
			//Card,
			//Form,
			//Textarea,
			//Item,
			//Input,
			//Label
} from "native-base";
import styles from "./styles";

export interface Props {
	onSimpan: Function;
	navigationBack: Function;
	inputAnalysisForm: any;
}
export interface State {}

class InputAnalysisPage extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params.name.key;
		
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigationBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
						<Body style={{ flex: 3 }}>
							<Title>Input Analysis</Title>
						</Body>
					<Right />
				</Header>

				<Content>
					{this.props.inputAnalysisForm}
						<Button 
							block	
							style={styles.Item}
							onPress={() => this.props.onSimpan()}
							>
							<Text>Simpan</Text>
						</Button>
				</Content>
			</Container>
		);
	}
}

export default InputAnalysisPage;
