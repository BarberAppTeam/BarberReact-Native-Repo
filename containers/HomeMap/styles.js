import { StyleSheet,Dimensions } from 'react-native';
import React from 'React';


const {width, height} = Dimensions.get('window');
const styles= StyleSheet.create({
    mainContainerView:{
        backgroundColor:'#F5F5F5'
    },
    mainText:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    }
});

export default styles;