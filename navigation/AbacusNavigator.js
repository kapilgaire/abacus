import {
  createAppContainer

} from 'react-navigation';
import CustomDrawerNavigation from '../components/CustomDrawerNavigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import {
  createStackNavigator

} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import AddSubParam from '../screens/AddSubParam';
import DivisionParam from '../screens/DivisionParam';
import MulticationParam from '../screens/MulticationParam';
import PercentageParam from '../screens/PercentageParam';
import TableParam from '../screens/TableParam';
import AddParam from '../screens/AddParam';
import CubeRootParam from '../screens/CubeRootParam';
import DecimalAddParam from '../screens/DecimalAddParam';
import LongMulticationParam from '../screens/LongMultiplicationParam';
import SquareRootParam from '../screens/SquareRootParam';
import MixAddSubParam from '../screens/MixAddSubParam';

import AddOperation from '../screens/AddOperation';
import AddSubOperation from '../screens/AddSubOperation';
import DecimalAddOperation from '../screens/DecimalAddOperation';
import MultiplicationOperation from '../screens/MultiplicationOperation';
import DivisionOperation from '../screens/DivisionOperation';
import MixAddSubOperation from '../screens/MixAddSubOperation';
import LongMultiOperation from '../screens/LongMultiOperation';







const AbacusNavigator = createStackNavigator({
  Home: CategoriesScreen,
  AddParam: AddParam,
  DecimalAddParam: DecimalAddParam,
  LongMulticationParam: LongMulticationParam,
  SquareRootParam: SquareRootParam,
  AddSubParam: AddSubParam,
  DivisionParam: DivisionParam,
  MulticationParam: MulticationParam,
  PercentageParam: PercentageParam,
  CubeRootParam: CubeRootParam,
  TableParam: TableParam,
  MixAddSubParam: MixAddSubParam,
  AddOperation: AddOperation,
  AddSubOperation: AddSubOperation,
  DecimalAddOperation: DecimalAddOperation,
  MultiplicationOperation: MultiplicationOperation,
  DivisionOperation: DivisionOperation,
  MixAddSubOperation: MixAddSubOperation,
  LongMultiOperation: LongMultiOperation


});
const MainNavigator = createDrawerNavigator(
  {

    Home: {
      screen: AbacusNavigator,
      navigationOptions: {
        title: 'Home'
      }
    },

    AddSub: {
      screen: AddSubParam,
      navigationOptions: {
        title: 'Add/Sub'
      }
    },

    Division: {
      screen: DivisionParam,
      navigationOptions: {
        title: 'Division'
      }
    },

    Multiply: {
      screen: MulticationParam,
      navigationOptions: {
        title: 'Multiply'
      }
    },

    Percentage: {
      screen: PercentageParam,
      navigationOptions: {
        title: 'Percentage'
      }
    },

    Root: {
      screen: CubeRootParam,
      navigationOptions: {
        title: 'Root'
      }
    },

    Table: {
      screen: CubeRootParam,
      navigationOptions: {
        title: 'Table'
      }
    },


  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);

export default createAppContainer(MainNavigator);
