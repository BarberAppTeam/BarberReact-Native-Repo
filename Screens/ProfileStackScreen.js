import {createStackNavigator} from 'react-navigation-stack';
import ProfileSideNav from '../containers/Profile/ProfileSideNav';

// Profile index to   
const ProfileStack= createStackNavigator({
    Profile: {
        screen:ProfileSideNav,
        navigationOptions:{
        header:null,
        }

    }
});

export default ProfileStack;