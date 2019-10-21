import React, {Component} from 'react';
import{
    Stylesheet,
    AppRegistry,
    Text,
    View
} from 'react-native';
import Login from './src/components/Login/Login';

export default class BaberApp extends Component {
    render(){
        return(
            <Login>

            </Login>
        );
    }
}

const styles = stylesheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItem: 'center',
        backgroundColor: '#192a56',
    },
    welcome:{
        fontSize:20,
        textAlign: 'center',
        margin: 10,
    }
})