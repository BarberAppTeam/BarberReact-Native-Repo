import * as React from 'react';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import HomeMapStackScreen from './HomeMapStackScreen';
import ExploreStackScreen from './ExploreStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import NotificationStackScreen from './NotificationStackScreen';
import { View, Text } from 'react-native';


const ICON_SIZE = 10;
const CustomTabBar = createBottomTabNavigator({

    
    FindBarber:{
        screen:HomeMapStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Map',
            /*tabBarIcon:({tintColor}) => (
                <Icons name = "ios-compass" color={tintColor} size={ICON_SIZE}/>
            )*/

        }

    },
    Explore:{
        screen:ExploreStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Explore',
            /*tabBarIcon:({tintColor}) => (
                <Icons name="home"  color={tintColor} size={ICON_SIZE}/>
            )*/
        }
    },
    Notifications:{
        screen:NotificationStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Notifications',
           /* tabBarIcon:({tintColor}) => (
                <Icons name = "ios-notifications" color={tintColor} size={ICON_SIZE}/>
            )*/
        }

    },
     Profile: {
        screen: ProfileStackScreen,
        navigationOptions: {
            header:null,
            tabBarlabel:'Profile',
            /*tabBarIcon: ({ tintColor}) => (
                <Icons name='md-contact' size={ICON_SIZE} color={tintColor}/>
            )*/
        }
    },
    
}, 
{
    // see next line
    headerMode: 'none',
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

export default  CustomTabBar;

