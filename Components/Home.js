import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>    
        <StatusBar backgroundColor='#69A6F7'/>
        <View>
            <Text> Home page </Text>
        </View>
      </>
    );
  }
}
