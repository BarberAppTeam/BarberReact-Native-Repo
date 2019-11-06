import React, { Component } from 'react';
import { createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeMapStackScreen from '../';
import ExploreStackScreen from './ExploreStackScreen';
import ProfileStackScreen from './Screens/ProfileStackScreen';
import NotificationStackScreen from './NotificationStackScreen';
import { View, Text } from 'react-native';


const ICON_SIZE = 30;
const CustomTabBar = createBottomTabNavigator({
    ExploreStackScreen:{
        screen:ExploreStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Explore',
            tabBarIcon:({tintColor}) => (
                <ion-icon name="home" size={ICON_SIZE}/>
            )
        }
    },
    
    HomeMapStackScreen:{
        screen:HomeMapStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Barbers',
            tabBarIcon:({tintColor}) => (
                <ion-icon name = "pin" color={tintColor} size={ICON_SIZE}/>
            )

        }

    },
    NotificationStackScreen:{
        screen:NotificationStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Notifications',
            tabBarIcon:({tintColor}) => (
                <ion-icon name = "notifications-outline" color={tintColor} size={ICON_SIZE}/>
            )
        }

    },
     ProfileStackScreen: {
        screen: ProfileStackScreen,
        navigationOptions: {
            header:null,
            tabBarlabel:'Profile',
            tabBarIcon: ({ tintColor}) => (
                <Icon name='contact' size={ICON_SIZE} color={tintColor}/>
            )
        }
    },
    
}, 
    {
        animationEnabled:false,
        swipeEnabled:false,
        lazy:true,
        tabBarOptions:{
            activeTintColor: 'black',
            showIcon: true,
            showLabel:true,
            acttiveBackgroundColor:'rgba(215,215,215,0.1',
            inactiveBackgroundColor: 'rgba(215,215,215,0.1',
            labelStyle: {
                fontSize: 10,
            },
            style: {
                backgroundColor: 'rgba(215,215,215,0.1',
            },
        },
    });

export default  CustomReactNavigator;

