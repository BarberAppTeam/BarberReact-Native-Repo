import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class ExploreScreen extends Component {
  handleGoBack =()=> {

  }

  render() {
    return (
      <View style={styles.mainContainerView}>
        <Text style={styles.mainText}> ExploreScreen </Text>
      </View>
    );
  }
}

export default ExploreScreen;
