import *as React from 'react';
import { 
  Text, 
  View,
  Button,
  StyleSheet, } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator}
 from 'react-navigation-stack';

class IntroScreen extends React.Component {
 
  render() {
    return <View style={{ flex:1, alignItems: 'center', justifyContrnt: 'center'}}>
      <Text> Login</Text>
      <Button 
        title="Go to Login"
        onPress={() => this.props.navigation.navigate('LoginScreen')}
      />  
      </View>;
  }
}

class LoginScreen extends React.Component {
  render() {
    return <View style={{ flex:1, alignItems: 'center', justifyContent='center'}}>
      <Text> IntroText</Text>
      <Button 
        title="Back to Intro"
        onPress={() => this.props.navigation.navigate('Login')}
        
      />  
      </View>;
  }
}

const RootStack = createStackNavigator({
  Intro:IntroScreen,
  Login:LoginScreen,
    },
{initialRouteName:'Intro',
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{
    render(){
        return<AppContainer/>
    }
}

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










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

