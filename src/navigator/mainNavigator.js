import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging14133333Navigator from '../features/Messaging14133333/navigator';
import Messaging15133332Navigator from '../features/Messaging15133332/navigator';
import BlankScreen18133331Navigator from '../features/BlankScreen18133331/navigator';
import BlankScreen17133330Navigator from '../features/BlankScreen17133330/navigator';
import Settings133298Navigator from '../features/Settings133298/navigator';
import Settings133281Navigator from '../features/Settings133281/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging14133333: { screen: Messaging14133333Navigator },
Messaging15133332: { screen: Messaging15133332Navigator },
BlankScreen18133331: { screen: BlankScreen18133331Navigator },
BlankScreen17133330: { screen: BlankScreen17133330Navigator },
Settings133298: { screen: Settings133298Navigator },
Settings133281: { screen: Settings133281Navigator },

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
