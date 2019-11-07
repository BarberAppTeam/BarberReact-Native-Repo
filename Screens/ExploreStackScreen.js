import {createStackNavigator} from 'react-navigation-stack';
import ExploreScreen from '../containers/ExploreScreen';

// Profile index to   
const ExploreStack= createStackNavigator({
    ExploreScreen: {
        screen:ExploreScreen,
        navigationOptions:{
        header:null,
        }

    }
});

export default ExploreStack;