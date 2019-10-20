//Libraries for creating stack navigator function

import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStactNavigator } from 'react-navigation-stack';

import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

//Dependencies for User Authentication:

/*
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
*/

//Creating StacK Navigator

class HomeScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
Home:{
  screen: HomeScreen,
}
})

export default createAppContainer(AppNavigator);

//User Authentication:

/*const config = {
  issuer: 'https://${yourOktaDomain}/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '{clientId}',
  pkce: true
}

//User Authentication

class App extends Component {
  render() {
    return (
      <Router>
        <Security {...config}>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}
*/





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
export default App;
*/