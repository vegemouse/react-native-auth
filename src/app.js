import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCs7HthERnDrR6s04O8RnDPxog47hvrEXQ",
      authDomain: "auth-323e4.firebaseapp.com",
      databaseURL: "https://auth-323e4.firebaseio.com",
      projectId: "auth-323e4",
      storageBucket: "auth-323e4.appspot.com",
      messagingSenderId: "59947243840"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
