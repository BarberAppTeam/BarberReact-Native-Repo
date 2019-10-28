import React, {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ThirdOnboarding extends Component {

  render() {
    return ( < View >
      <Image source = {require('./Memoji.png')}/>

      <Text> Get reminders and notifications. Keep your appointments up to date. </Text>

      <TouchableOpacity style = {styles.Next}
      onPress = {() => this.props.navigation.navigate('Form')}>
      <Text> Get Started </Text>   </TouchableOpacity>  </View>
    )
  }
}

const styles = StyleSheet.create({
  Next: {
    backgroundColor: '#DDDDDD',
    opacity: 0.9,
    marginBottom: 400,
    fontSize: 24,
    fontFamily: 'Farah',
    paddingHorizontal: 100,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 25
  }
})