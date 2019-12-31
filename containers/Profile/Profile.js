import React, {Component} from 'react';
import { View, Text, StyleSheet,Dimensions, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import {createDrawerNavigator, Draweritems} from 'react-navigation-drawer';
import SettingsScreen from '../../screens/SettingsScreen'
import { DrawerItems } from 'react-navigation-drawer';



export default class Profile extends Component {

  render() {
    return (
      <View style={styles.mainContainerView}>
        <Text style={styles.mainText}> Profile </Text>
        <AppDrawerNavigator/>
      </View>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>

    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>

  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  Settings:SettingsScreen
})




