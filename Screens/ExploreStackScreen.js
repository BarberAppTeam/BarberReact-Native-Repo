import {createStackNavigator} from 'react-navigation';
import ExploreScreen from '../ExploreScreen';

// Profile index to   
const ExploreStackScreen= createStackNavigator({
    ExploreScreen: {
        screen:ExploreScreen,
        navigationOptions:{
        header:null,
        }

    }
});

export default ExploreStackScreen;