import React, { Component } from 'react';
import { Image, StyleSheet, Text, Platform, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import {Permissions} from 'expo-permissions';

export default class SecondOnboarding extends Component {

  static navigationOptions = {
    header: null
  }


  permissionFlow = async function getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
      throw new Error('Location permission not granted'),
      Linking.openURL('app-settings:')
    }

    /*
      Get some data
    */
   /* const { data } = await Permissions.getAsync(Permissions.LOCATION, { pageSize: 1 });
    console.log(data[0]);*/
  
  };



  render() {
  
    return ( 
    
    <KeyboardAwareScrollView>
      <Image style = {styles.Location}
      source = {require('./images/Location.png')}/>
      <Text style={styles.Reccomendation}> 
          To get the best barber reccomendations around you! 
      <Text style={styles.Neat}> NEAT</Text> will need to use your location services. </Text>

      <TouchableOpacity style = {styles.EnableLocation}
          onPress={() => {
            this.permissionFlow
            /*
            Permissions.request(
              Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            ).then(granted => {
              alert(granted) // just to ensure that permissions were granted
            });*/
          }}>
          <Text style={styles.EnableLocationText}> Enable Location </Text>  
      </TouchableOpacity> 
       < TouchableOpacity style = {styles.NotNow}
       onPress = {() => this.props.navigation.navigate('Intro3')}>
         <Text> Not Now </Text>   
         </TouchableOpacity> 

      </KeyboardAwareScrollView>
    )
  }
};


const Neat = {
  expo: {
    ios: {
      infoPlist: {
        NSCalendarsUsageDescription:
          'Allow Expo experiences to access your calendar',
        NSCameraUsageDescription:
          'Expo uses your camera to scan project QR codes. Expo experiences you open may use the camera with the Expo camera API.',
        NSContactsUsageDescription:
          'Allow Expo experiences to access your contacts',
        NSLocationWhenInUseUsageDescription:
          'Allow Expo experiences to use your location',
        NSMicrophoneUsageDescription:
          'Allow Expo experiences to access your microphone',
        NSMotionUsageDescription:
          "Allow Expo experiences to access your device's accelerometer",
        NSPhotoLibraryAddUsageDescription:
          'Give Expo experiences permission to save photos',
        NSPhotoLibraryUsageDescription:
          'Give Expo experiences permission to access your photos',
        NSRemindersUsageDescription:
          'Allow Expo experiences to access your reminders',
      },
    },
  },
};

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  EnableLocation: {
     backgroundColor: '#9AE1D3',
       flexDirection: 'column',
       justifyContent: 'space-around',
       alignItems: 'center',
       alignSelf: 'center',
       color: 'black',
       textAlign: 'center',
       height: 50,
       paddingVertical: 10,
       paddingHorizontal: 80,
       borderRadius: 5,
       marginTop: 75,
       marginBottom: 10,
  },
   Neat: {
     fontWeight: 'bold',
     color: '#435e59',
     fontSize:25
   },
  EnableLocationText:{
    fontWeight: '600',
    fontSize: 20,
    color: '#435e59',
    lineHeight: 25,

  },
  NotNow: {
    backgroundColor: '#DDDDDD',
    fontSize: 25,
    opacity:.5,
    fontFamily: 'Avenir Next',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf:'center',
    alignContent:'center',
    color: 'black',
    textAlign: 'center',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 95,
    marginVertical:5,
    borderRadius: 5
  },
  Reccomendation: {
     textAlign: 'center',
       paddingHorizontal: 15,
       marginVertical: 10,
       marginHorizontal:7,
       textAlignVertical: 'center',
       lineHeight: 30,
       fontSize: 20,
  },
  Location:{
    marginVertical:100,
     marginLeft: 70,
     marginRight: 150,
    maxHeight:265,
    maxWidth:265
  },
 
})

/*import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
*/