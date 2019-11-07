import {createStackNavigator} from 'react-navigation-stack';
import Notifications from '../containers/Notifications';

// index to   
const NotificationStack= createStackNavigator({
    Notifications: {
        screen:Notifications,
        navigationOptions:{
        header:null,
        
        }

    }
});

export default NotificationStack;