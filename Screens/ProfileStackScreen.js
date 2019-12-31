import {createStackNavigator} from 'react-navigation-stack';
import Profile from '../containers/Profile/Profile';

// Profile index to   
const ProfileStack= createStackNavigator({
    Profile: {
        screen:Profile,
        navigationOptions:{
        header:null,
        }

    }
});

export default ProfileStack;