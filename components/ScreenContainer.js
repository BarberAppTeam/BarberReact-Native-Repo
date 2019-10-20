import React from 'react';
import { 
  AppRegistry,
  Text, 
  View,
  Button,
  StyleSheet, 
} from 'react-native';
import { 
  createStackNavigator,
  createAppContainer
} from 'react-navigation-stack';

import IntroScreen from './IntroScreen'
import LoginScreen from './LoginScreen'





class IntroScreen extends React.Component {
 
  render() {
    return <View>
      <Text> LoginText</Text>
      <Button 
        title="Login"
        onPress={() => this.props.navigation.navigate('LoginScreen')}
        
      />  
      </View>;
  }
}

class LoginScreen extends React.Component {
  render() {
    return <View>
      <Text> IntroText</Text>
      <Button 
        title="Back to Intro"
        onPress={() => this.props.navigation.navigate('IntroScreen')}
        
      />  
      </View>;
  }
}

const RootStack = createStackNavigator({
  Intro:{
    screen: IntroScreen,},
  Login:{
    screen: LoginScreen
    }
});

/*
const MainScreenNavigator = TabNavigator({
	Intro: { screen: AppIntroScreen },
	Login: { screen: LoginScreen },
});

const ReactNativeTest = StackNavigator({
	Home: { screen: MainScreenNavigator },
	Chat: { screen: ChatScreen },
});
*/ 


// AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);

export default App;









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

