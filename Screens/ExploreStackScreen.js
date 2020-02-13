import {createStackNavigator} from 'react-navigation-stack';
import Explore from '../containers/Explore/Explore';

// Profile index to   
const ExploreStack= createStackNavigator({
    Explore: {
        screen:Explore,
        navigationOptions:{
        header:null,
        }

    }
});

export default ExploreStack; 