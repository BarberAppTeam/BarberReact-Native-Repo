import { StyleSheet,Dimensions } from 'react-native';
import React from 'React';


const {width, height} = Dimensions.get('window');
const styles= StyleSheet.create({
    mainContainerView:{
        flex:1,
    },
    HeaderText:{
        fontSize: 20,
        textAlign: 'left',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'black',
        width:200,
    },
    MapView:{
    flex:1

    }
});

export default styles;