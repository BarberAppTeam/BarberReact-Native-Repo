
import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    Button,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';


class LoginScreen extends Component {
//Add Keyboard
  static navigationOptions ={
    header:null
  }
    render() {
        return (
            <View style={styles.container}>
                    < Image source = {
                      require('./barberschair.png')
                    }
                    style = {
                      styles.chair
                    }
                    onLoadStart = {
                      (e) => this.setState({
                        loading: true
                      })
                    }
                    />
                    <Text style={styles.Welcome}> Welcome To Tonso</Text>

                    <Button title='Next' style={styles.title}
                      onPress={() => this.props.navigation.navigate('Form')}
                    />
            </View>
        ); 
    }
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f5f6fa',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'column',
  },
  title:{
    color: '#353b48',
    textAlign:'center',
    fontStyle:'italic',
    opacity: 0.9,
    marginBottom: '400',
  },
  Welcome:{
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    color:'#353b48',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'center'
  },
  chair:{
    
    width:300,
    height:300,
    marginBottom:20,
    marginTop:20
  }

})
export default LoginScreen;  