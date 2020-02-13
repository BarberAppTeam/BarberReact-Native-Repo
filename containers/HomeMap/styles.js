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
        marginLeft:15,
        opacity:1
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

  },
  welcome:{
    backgroundColor: '#9AE1D3', 
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'black',
    textAlign: 'center',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginTop: 395,
    marginBottom: 10,
    marginRight: 10
  },

  locationButton:{
    marginLeft:350,
    marginTop:400
  }
});

export default styles;