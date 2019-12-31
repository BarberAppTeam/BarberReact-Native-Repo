import { StyleSheet,Dimensions } from 'react-native';
import React from 'React';


const {width, height} = Dimensions.get('window');
const styles= StyleSheet.create({
    mainContainerView:{
        flex:1,
        backgroundColor:'transparent',
        opacity:1
    },
    HeaderText:{
        fontSize: 36,
        textAlign: 'left',
        backgroundColor: 'transparent',
        fontWeight:'600',
        color: 'black',
        width:200,
        opacity:.9,
        marginVertical:85,
        marginLeft:15
    },
    MapView:{
    flex:1

    },
    card:{
    backgroundColor: 'transparent',
    opacity:1,
    },
    container: {
    paddingTop: 20,
    flex: 1
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
  },
  GoBack:{
    color:"white",
    paddingVertical:10

  }
});

export default styles;