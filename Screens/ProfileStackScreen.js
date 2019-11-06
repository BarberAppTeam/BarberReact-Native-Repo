import {createStackNavigator} from 'react-navigation';
import Profile from './Profile';

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