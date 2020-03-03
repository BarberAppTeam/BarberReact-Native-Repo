import React, { Component, useState } from 'react';
import styles from './styles';
import {Stylesheet,View,Text,TouchableOpacity,Platform, Button, Alert,AppRegistry} from 'react-native';
import MapView, {AnimatedRegion,Animated} from 'react-native-maps';
import {Constants} from 'expo';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { Hub, Logger } from 'aws-amplify';
import Permissions from 'react-native-permissions';

/*function reCenter() {
    //Declaring a new state variable, we'll call recenter, trying  to capture the long and lat
    const [recenterLong, setrecenterLong] = useState(locationResult);
    const [recenterLat, setrecenterLat] =useState(locationResult => 'latitude')
}*/


const logger = new Logger('My-Logger');

const listener = (data) => {

    switch (data.payload.event) {

        case 'signIn':
            logger.error('user signed in'); //[ERROR] My-Logger - user signed in
            break;
        case 'signUp':
            logger.error('user signed up');
            break;
        case 'signOut':
            logger.error('user signed out');
            break;
        case 'signIn_failure':
            logger.error('user sign in failed');
            break;
        case 'configured':
            logger.error('the Auth module is configured');

    }
}

Hub.listen('auth', listener);


export default class HomeMaps extends Component {
   /**?state is local to a component */
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
            const response = await Permissions.askAsync(Permissions.LOCATION)
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
         
        navigator.geolocation.getCurrentPosition(
           ({coords:{longitude,latitude}}) => this.setState({latitude,longitude}), () => console.log('State:' , this.state),
           (error) => console.log('Error:', error)
        )}

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });
    
    //What I am trying to achieve above is Render Geocoding to get the users current location

    };

    constructor(props) {
        super(props);
        this.state = {
            region: new AnimatedRegion({
                latitude: 33.741531,
                longitude: -118.194176,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
        }
    }
     
  render() {
    
    return (
      
        <View style={styles.mainContainerView}>

            <MapView style={styles.MapView}
                showsUserLocation
                showsMyLocationButton={true}
                showsBuildings={true}
                zoomEnabled={true}

                initialRegion={
                    {
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                }>


                <Text style={styles.HeaderText}>Find Barbers <Text> Near You </Text>
                </Text >

                <TouchableOpacity style={styles.NotNow} onPress={() => this.props.navigation.navigate('Intro3')}>
                    <Ionicons style={styles.locationButton} name="ios-locate" size={45} />
                </TouchableOpacity>
            </MapView>

        </View>


















);

}
  }

AppRegistry.registerComponent('BarberReact-Native-Repo', function(){ return HomeMaps})




                /*<Animated
                region={this.state.region}
                onRegionChange={this.onRegionChange}
                /> */     


