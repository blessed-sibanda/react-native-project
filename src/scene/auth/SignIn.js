import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class SignIn extends Component {
  render() {
    return (
      <View>
        <Text>Sign In</Text>
        <Button
          onPress={() => {
            this.props.navigation.push('CreateAccount');
          }}
          title="Create Account"
        />
      </View>
    );
  }
}

export default SignIn;
