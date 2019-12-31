import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import SimpleCard from '@paraboly/react-native-card';



export default class Notifications extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.mainContainerView}>
      
        <Text style={styles.mainText}> Notifications </Text>
        

      </View>

      
    );
  }
}