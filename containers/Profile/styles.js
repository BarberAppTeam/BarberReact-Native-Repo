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
    },
    container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    paddingTop:20,
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }});

export default styles;