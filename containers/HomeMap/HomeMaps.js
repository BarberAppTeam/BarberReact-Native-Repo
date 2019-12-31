import React, { Component } from 'react';
import styles from './styles';
import {Stylesheet,View,Text,TouchableOpacity,Platform, Button, Alert} from 'react-native';
import Permissions from 'react-native-permissions';
import MapView from 'react-native-maps';
import { Card, SimpleCard } from "@paraboly/react-native-card";



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


     /* state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

*/
 constructor(props) {
    super(props);
    this.state = {Region};
    console.log(this.props)
    }


componentDidMount() {
        return getCurrentLocation().then(position => {
                    if (position) { 
                        this.setState({Region});
                    }
                });
            }

            findCoordinates = () => {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const location = JSON.stringify(position);
                        this.setState({location});
                    },
                    error => Alert.alert(error.message),
                    {enableHighAccuracy: true, timeout:20000, maximumAge:1000}
                );
            };

  render() {
    

    return (
      <View style={styles.mainContainerView}>
        
      <MapView style = {styles.MapView}
        showsUserLocation
        showsMyLocationButton={true}
        showsBuildings={true}
        zoomEnabled={true}
        onMapReady={() => {
        Permissions.request(
        Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
     ).then(granted => {
      alert(granted) // just to ensure that permissions were granted
    });
  }}


      initialRegion={
          {   
              
              latitude: 42.882004,
              longitude: 74.582748,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
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






