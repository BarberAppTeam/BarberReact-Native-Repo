
import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    Button,
    StyleSheet,
     } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class GettingStartedScreen extends Component {
//Add Keyboard
  static navigationOptions ={
    header:null
  }
    render() {
        return (
            <View style={styles.container}>
                    < Image source={
                      require('./barberschair.png')
                    }
                    style = {styles.chair}
                    onLoadStart = {
                      (e) => this.setState({
                        loading: true
                      })
                    }
                    />
              
                    <Text style={styles.Welcome}> Welcome To Tonso! </Text>
                    <TouchableOpacity
                      style={styles.Next}
                      onPress={() => this.props.navigation.navigate('Form')}> 
                      <Text> Next </Text>
                      </TouchableOpacity>
            </View>
        ); 
    }
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f5f6fa',
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection: 'column',
  },
  Next:{
    backgroundColor: '#DDDDDD',
    opacity: 0.9,
    marginBottom: 400,
    fontSize:24,
    fontFamily:'Farah',
    paddingHorizontal:100,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'center',
    paddingVertical: 15,
    marginTop:25
  },
  Welcome:{
    textAlign: 'center', // <-- the magic
    fontWeight: '500',
    fontFamily:'Avenir Next',
    /*Use Font.loadAsync if you would like to load in a custom font late on componentDidMount() {
                      Font.loadAsync({
                        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
                      })};*/
    fontSize: 36,
    color:'#353b48',

  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'center'
  },
  chair:{
    maxWidth:350,
    maxHeight:350,
    marginBottom:100,
    marginTop:170,
  }

})
export default GettingStartedScreen;  