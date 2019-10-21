
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

                    <Text style={styles.title2}> Barber ReactNative App</Text>

                    <Button title='Skip to Login' style={styles.title}
                      onPress={() => this.props.navigation.navigate('Form')}
                    />
            </View>
        ); 
    }
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#192a56',
    flex:1,
    padding: 20
    
  },
  title:{
    color:'#FFF',
    marginTop:600,
    width:160,
    textAlign:'center',
    fontStyle:'italic',
    opacity: 0.9,
    justifyContent: 'center',
    textAlign: 'justify'
  },
  title2:{
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 400,
    color:'#FFFFFF'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'center'
  },

})
export default LoginScreen;  