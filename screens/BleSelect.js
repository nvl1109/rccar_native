'use strict';

import React , {Component} from 'react';
import
{
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

class BleSelectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'first'
    }
  }

  onPressButton() {
    this.props.navigator.push({
      id: 'second'
    })
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onPressButton.bind(this)} style={{position:'absolute', top:200, left:120}}>
          <Text>goto Car Move</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = BleSelectScreen;