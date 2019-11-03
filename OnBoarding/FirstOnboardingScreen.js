import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FistOnboarding extends Component {
  static navigationOptions = {
    header: null
  }
 
  render() {
    return (
      <View>
      <Image style={styles.hair_shaver} source = {
        require('./hair-shaver.png')}/>
      
        <Text style = {styles.Description} > 
        <Text style={styles.Tonso}> TONSO </Text> 
        lets you easily find, book, pay for haircut appointments with local professionals. </Text>

        <TouchableOpacity style = {styles.Next}
        onPress = {() => this.props.navigation.navigate('Intro2')} >
          <Text style={styles.NextText}> Next </Text> 
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 Next: {
   backgroundColor: '#DDDDDD',
     fontSize: 16,
     opacity:.5,
     fontFamily: 'Avenir Next',
     flexDirection: 'column',
     justifyContent: 'space-around',
     alignItems: 'center',
     alignSelf: 'center',
     alignContent: 'center',
     color: 'black',
     textAlign: 'center',
     height: 50,
     paddingVertical: 10,
     paddingHorizontal: 95,
     marginVertical: 85,
     borderRadius:5
 },
 NextText:{
  fontSize: 20,
  fontWeight: '600',
 },
 hair_shaver: {
     maxWidth: 350,
     maxHeight: 350,
     marginBottom: 85,
     marginTop: 100,
     marginLeft: 30,

 },
 Tonso: {
   fontWeight: "bold",
   color: '#5D9CEC',
   lineHeight:25,
   textAlign:'center',
   }
 ,
 Description: {
   textAlign: 'auto',
   paddingHorizontal: 1,
   marginVertical:20,
   
   fontSize: 18,
}
})