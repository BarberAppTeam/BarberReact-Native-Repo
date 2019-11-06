import {createStackNavigator} from 'react-navigation';
import NotificationStackScreen from './NotificationStackScreen';

// Profile index to   
const NotificationStackScreen= createStackNavigator({
    NotificationStackScreen: {
        screen:NotificationStackScreen,
        navigationOptions:{
        header:null,
        
        }

    }
});

export default NotificationStackScreen;