import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import InstagramLogin from 'react-native-instagram-login';

class SignIn extends Component {
  state = {
    activeImage: 0,
    modalVisible: false,
    instagramEmail: '',
  };

  instagramToken = '';

  images = [
    require('../../../asset/image/splash1.png'),
    require('../../../asset/image/splash2.png'),
    require('../../../asset/image/splash3.png'),
  ];

  onClickSignUp = () => {
    this.props.navigation.navigate('CreateAccount');
  };

  onClickFacebook = () => {};

  onClickInstagram = () => {
    // InstagramLogin()
  };

  render() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome to</Text>
        <View style={styles.where}>
          <Text style={styles.mua}>Mua'a</Text>
          <Text style={styles.place}>place for professionals</Text>
        </View>
        <Button onPress={this.onClickSignUp} title="Create Account" />
      </View>
    );
  }
}

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8',
});

const styles = EStyleSheet.create({
  welcome: {
    fontFamily: 'Lato',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '$textColor',
  },
  where: {
    margin: '4rem',
  },
  mua: {
    fontFamily: 'Lato',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#aaa',
  },
  place: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    color: 'red',
  },
});

export default SignIn;
