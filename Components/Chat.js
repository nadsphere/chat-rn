import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
        <Text> Chatly, let's chat today </Text>
      </View>
    );
  }
}
