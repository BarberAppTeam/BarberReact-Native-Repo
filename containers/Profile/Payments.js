import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Hub, Logger } from 'aws-amplify';

const logger = new Logger('My-Logger');

const listener = (data) => {

    switch (data.payload.event) {

        case 'signIn':
            logger.error('user signed in'); //[ERROR] My-Logger - user signed in
            break;
        case 'signUp':
            logger.error('user signed up');
            break;
        case 'signOut':
            logger.error('user signed out');
            break;
        case 'signIn_failure':
            logger.error('user sign in failed');
            break;
        case 'configured':
            logger.error('the Auth module is configured');

    }
}

Hub.listen('auth', listener);

export default class PaymentsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PaymentsScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});