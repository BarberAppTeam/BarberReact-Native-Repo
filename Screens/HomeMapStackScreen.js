import {createStackNavigator} from 'react-navigation-stack';
import HomeMaps from '../containers/HomeMap';

//index to   
const HomeMapStack= createStackNavigator({
    HomeMaps: {
        screen:HomeMaps,
        navigationOptions:{
        header:null,
        }

    }
});

export default HomeMapStack;