import React, { Component } from 'react';
import styles from './styles';
import {Stylesheet,View,Text,TouchableOpacity,Platform, Button, Alert} from 'react-native';
import MapView from 'react-native-maps';
import { Card, SimpleCard } from "@paraboly/react-native-card";
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import Permissions from 'react-native-permissions';



const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
};
const Region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

export default class HomeMaps extends Component {


 
 constructor(props) {
    super(props);
    this.state = {Region};
    console.log(this.props)
    }


    componentWillMount() {
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
    

    return (
      <View style={styles.mainContainerView}>
        
      <MapView style = {styles.MapView}
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


        <Text style = {
            styles.HeaderText
        }>Find Barbers <Text> Near You </Text>
         </Text >
        
       
       <TouchableOpacity onPress={this.findCoordinates}>
           <Text style={styles.welcome}>Location: {this.state.location}</Text>
       </TouchableOpacity>
        
      </MapView>
      
      </View>
    )
  }
}






