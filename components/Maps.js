//NativeMaps Code Here
import React from 'react';
import {
    Stylesheet,
    View,
    Text,
    TouchableOpactity,
    Platform
} from 'react-native';

import MapView, {
    Marker,
    AnimatedRegion,
    Polyline,
    Provider_Google,
    PROVIDER_GOOGLE

} from 'react-native-maps';
import haversine from 'haversine';

const styles = Stylesheet.create({
    container: {
        ...Stylesheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: 'center'
    }
})

class AnimatedMarkers extends React.Component {
    contructor(props) {
        super(props);
// Animated region will help animate markers when user location updates
//Most of these items listed in this.state will be used later in the app

    this.state ={
        latitude: LATITUDE,
        longitude: LONGITUDE,
        routeCoordinates:  [],
        distanceTravelled: 0,
        prevLatLng: {},
        coordinate: new AnimatedRegion({
            latitude:LATITUDE,
            longitude: LONGITUDE
        })
    };

}


// getting the location cordinates everytime the user moves using the watchPosition method
componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
        position => {
            const { coordinate, routeCoordinates,distanceTravelled } =
        this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
            latitude,
            longitude
        };

        // newCoordinate stores updated coodinates received from position.coords..
// Which then allows us to animate the marker to the new coordinates
if (Platform.OS === "ios"){
    if (this.marker) {
        this.marker._component.animateMarkerToCoordinate
        (
            newCoordinate,
            500
        );
       }       
      }
    else {
        coordinate.timing(newCoordinate).start();
    }
// updating initial states...
    this.setState({
        latitude,
        longitude,
        routeCoordinates: routeCoordinates.concat([newCoordinate]),
        distanceTravelled:
        distanceTravelled + this.calcDistance(newCoordinate),
        preLatLng: newCoordinate
    });
   },
   error => console.log(error),
   {enableHighAccuracy:true, 
    timeout: 20000, 
    maximumAge: 1000 }
    );
}
/* Find out what this function does
componentWillUnmount() {
   navigator.geolocation.clearWatch(this.watchID);
  }
*/


getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
});

//optional to keep - Calculating the distance traveled, storing the distance traveled by the user
calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
};


render() {   
    return (
//Rendering everthing on map
//Polyline draws the path when the user moves
//Polyline has acoordinate props which accept an array of coordinates which we can get from our routeCoordinates
//MarkerAnimated shows the marker at the user current position
<View Style={styles.container}>
    <MapView
    style={styles.map}
    provider={PROVIDER_GOOGLE}
    showUserLocation
    followUserLocation
    loadingEnabled
    region={this.getMapRegion()}
    >
    
    <Polyline coordinates={this.state.routeCoordinates} strokeWidth={3} />
    <Marker.Animated
    ref={marker => {
        this.marker =marker;
    }}
    coordinate={this.state.coordinate}
    />
    </MapView>
    <View style={styles.buttonContainer}>
        <TouchableOpactity style={[styles.bubble, styles.button]}>
            <Text style={styles.bottomBarContent}>
            {parseFloat(this.state.distanceTravelled).toFixed(2)} mi
            </Text>
        </TouchableOpactity>
    </View>
    </View>
    );
}}


