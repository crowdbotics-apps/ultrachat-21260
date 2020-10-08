import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen24133372Navigator from '../features/BlankScreen24133372/navigator';
import Settings133357Navigator from '../features/Settings133357/navigator';
import Settings133340Navigator from '../features/Settings133340/navigator';
import Messaging11133336Navigator from '../features/Messaging11133336/navigator';
import Messaging12133335Navigator from '../features/Messaging12133335/navigator';
import Messaging13133334Navigator from '../features/Messaging13133334/navigator';
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
BlankScreen24133372: { screen: BlankScreen24133372Navigator },
Settings133357: { screen: Settings133357Navigator },
Settings133340: { screen: Settings133340Navigator },
Messaging11133336: { screen: Messaging11133336Navigator },
Messaging12133335: { screen: Messaging12133335Navigator },
Messaging13133334: { screen: Messaging13133334Navigator },
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
