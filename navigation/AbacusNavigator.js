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
import SquareRootOperation from '../screens/SquareRootOperation';
import CubeRootOperation from '../screens/CubeRootOperation';
import TableOperation from '../screens/TableOperation';
import PercentageOperation from '../screens/PercentageOperation';
import MyStopwatch from '../screens/MyStopwatch';
import MyCalculator from '../screens/MyCalculator';
import DecimalMultiplicationOperation from '../screens/DecimalMultiplicationOperation';
import DecimalMulticationParam from '../screens/DecimalMulticationParam';
import DecimalDivisionOperation from '../screens/DecimalDivisionOperation';
import DecimalDivisionParam from '../screens/DecimalDivisionParam';
import NegativeAddSubOperation from '../screens/NegativeAddSubOperation';
import NegativeAddSubParam from '../screens/NegativeAddSubParam';


import SquareRootPractiseOperation from '../screens/SquareRootPractiseOperation';
import SquareRootPractiseParam from '../screens/SquareRootPractiseParam';
import CubeRootPractiseParam from '../screens/CubeRootPractiseParam';
import CubeRootPractiseOperation from '../screens/CubeRootPractiseOperation';









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
  LongMultiOperation: LongMultiOperation,
  SquareRootOperation: SquareRootOperation,
  CubeRootOperation: CubeRootOperation,
  TableOperation: TableOperation,
  PercentageOperation: PercentageOperation,
  MyStopwatch: MyStopwatch,
  MyCalculator: MyCalculator,
  DecimalMulticationParam: DecimalMulticationParam,
  DecimalMultiplicationOperation: DecimalMultiplicationOperation,
  DecimalDivisionOperation: DecimalDivisionOperation,
  DecimalDivisionParam: DecimalDivisionParam,
  NegativeAddSubOperation: NegativeAddSubOperation,
  NegativeAddSubParam: NegativeAddSubParam,
  SquareRootPractiseOperation: SquareRootPractiseOperation,
  SquareRootPractiseParam: SquareRootPractiseParam,
  CubeRootPractiseParam: CubeRootPractiseParam,
  CubeRootPractiseOperation, CubeRootPractiseOperation






});
const MainNavigator = createDrawerNavigator(
  {

    Home: {
      screen: AbacusNavigator,
      navigationOptions: {
        title: 'Home'
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
