import {createStackNavigator} from 'react-navigation-stack';
import ProfileScreen from '../containers/Profile/ProfileScreen';

// Profile index to   
const ProfileStack= createStackNavigator({
    Profile: {
        screen:ProfileScreen,
        navigationOptions:{
        header:null,
        }

    }
});

export default ProfileStack;