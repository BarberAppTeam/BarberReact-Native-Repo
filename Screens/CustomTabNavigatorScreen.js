import * as React from 'react';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import HomeMapStackScreen from './HomeMapStackScreen';
import ExploreStackScreen from './ExploreStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import NotificationStackScreen from './NotificationStackScreen';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CustomTabBar = createBottomTabNavigator({

    
    FindBarber:{
        screen:HomeMapStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Map',
            tabBarIcon:({tintColor}) => (
                <Ionicons name="ios-compass" size={32} style={styles.Icon}/>
            )

        }

    },
    Explore:{
        screen:ExploreStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Explore',
            tabBarIcon:({tintColor}) => (
                <Ionicons name="ios-home" size={32} style={styles.Icon} />
            )
        }
    },
    Notifications:{
        screen:NotificationStackScreen,
        navigationOptions:{
            header:null,
            tabBarlabel:'Notifications',
            tabBarIcon:({tintColor}) => (
                <Ionicons name="ios-notifications" size={32} style={styles.Icon} />
            )
        }

    },
     Profile: {
        screen: ProfileStackScreen,
        navigationOptions: {
            header:null,
            tabBarlabel:'Profile',
            tabBarIcon: ({ tintColor}) => (
                <Ionicons name="md-contact" size={32} style={styles.Icon} />
            )
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
const styles = StyleSheet.create({
Icon:{
    marginTop:5
}

})
export default  CustomTabBar;

