import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Notifications extends Component {
  handleGoBack =()=> {

  }

  render() {
    return (
      <View style={styles.mainContainerView}>
        <Text style={styles.mainText}> Notifications </Text>
      </View>
    );
  }
}

export default Notifications;