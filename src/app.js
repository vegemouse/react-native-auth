import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCs7HthERnDrR6s04O8RnDPxog47hvrEXQ",
      authDomain: "auth-323e4.firebaseapp.com",
      databaseURL: "https://auth-323e4.firebaseio.com",
      projectId: "auth-323e4",
      storageBucket: "auth-323e4.appspot.com",
      messagingSenderId: "59947243840"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <View style={styles.spinnerContainerStyle}><Spinner size="large" /></View>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContainerStyle: {
    height: 500,
  }
};

export default App;
