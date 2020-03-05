import React, { Component } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp,FlatFeed, Activity,LikeButton, StatusUpdateForm } from 'expo-activity-feed';
import { Hub, Logger } from 'aws-amplify';
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

const CustomActivity = (props) => {
  return (
    <Activity
      {...props}
      Footer={
        <LikeButton {...props} />
      }
    />
  );
};

const ExploreScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
      <StreamApp
        apiKey="5rqsbgqvqphs"
        appId="40273"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiN2Q5NjhlMTMtZTEzNi00OTQ2LWI3ODItOGVkZTZkYWFmNzU1In0.I2g3uX_iseA6raR5cSI3PcppOml1VngbKYFTleAKGmc"
      >
        <FlatFeed Activity={CustomActivity} notify />
        <StatusUpdateForm feedGroup="timeline" />
      </StreamApp>
    </SafeAreaView>
  )};

export default ExploreScreen;







/*import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class ExploreScreen extends Component {
    state = {
        location: null,
        errorMessage: null,
    };

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
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        this.state = ({ data: JSON.string})

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
});*/










/*import * as React from 'react';

import { Text, View, StyleSheet, Linking } from 'react-native';

import * as Permissions from 'expo-permissions';

export default class App extends React.Component {
  state = {
    status: null,
  };

  permissionFlow = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    this.setState({ status });

    if (status !== 'granted') {
      Linking.openURL('app-settings:');
      return;
    }

    /*
      Get some data
    */

/* const { data } = await LOCATION.getPermissionsAsync({ pageSize: 1 });
 console.log(data[0]);
};

render() {
 return (
   <View style={styles.container}>
     <Text style={styles.paragraph} onPress={this.permissionFlow}>
       Permissions: {this.state.status}
     </Text>
   </View>
 );
}
}

/*
Permissions:
CAMERA
AUDIO_RECORDING
LOCATION
USER_FACING_NOTIFICATIONS
NOTIFICATIONS
CONTACTS
SYSTEM_BRIGHTNESS
CAMERA_ROLL
CALENDAR
REMINDERS
SMS
*/

/*
 * Changing message on iOS
 * Check the app.json
 */
/*
const exampleApp = {
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
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

*/









/*import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search:text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          />
          <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <Text style={styles.textStyle}>{item.title}</Text>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    marginTop: Platform.OS == 'ios'? 30 : 0
  },
  textStyle: {
    padding: 10,
  },
});*/