import { StyleSheet,Dimensions } from 'react-native';
import React from 'react';


const {width, height} = Dimensions.get('window');
const styles= StyleSheet.create({
    mainContainerView:{
        backgroundColor:'#F5F5F5',
        justifyContent:'center',
        alignItems:'center'
    },
    mainText:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    }
});

export default styles;