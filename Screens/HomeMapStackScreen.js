import {createStackNavigator} from 'react-navigation';
import HomeMapStackScreen from './HomeMapStackScreen';

// Profile index to   
const HomeMapStackScreen= createStackNavigator({
    HomeMapStackScreen: {
        screen:HomeMapStackScreen,
        navigationOptions:{
        header:null,
        }

    }
});

export default HomeMapStackScreen;