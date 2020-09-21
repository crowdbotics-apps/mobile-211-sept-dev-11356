import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen210959Navigator from '../features/BlankScreen210959/navigator';
import BlankScreen110956Navigator from '../features/BlankScreen110956/navigator';
import BlankScreen010955Navigator from '../features/BlankScreen010955/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen210959: { screen: BlankScreen210959Navigator },
BlankScreen110956: { screen: BlankScreen110956Navigator },
BlankScreen010955: { screen: BlankScreen010955Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
