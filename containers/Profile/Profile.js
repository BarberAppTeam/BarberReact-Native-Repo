import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Profile extends Component {
  handleGoBack =()=> {

  }

  render() {
    return (
      <View style={styles.mainContainerView}>
        <Text style={styles.mainText}> Profile </Text>
      </View>
    );
  }
}

export default Profile;