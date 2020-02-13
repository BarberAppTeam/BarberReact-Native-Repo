import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "./ProfileScreen";
import CalendarScreen from "./CalendarScreen";

const stackNav = StackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Profile",
            headerLeft: (<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Ionicons name="ios-menu" size={30} />
            </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 15 }
        })
    },
    Calendar: {
        screen: CalendarScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Calendar",
            headerLeft: (<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Ionicons name="ios-menu" size={30} />
            </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 15 }
        })
    }
});

export default stackNav;