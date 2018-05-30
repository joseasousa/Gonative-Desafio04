import { StackNavigator, TabNavigator } from 'react-navigation';

import { colors } from 'styles';

import Home from 'pages/Home';
import Details from 'pages/Details';
import Cart from 'pages/Cart';

const Main = StackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
    headerStyle: {
      backgroundColor: colors.white,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.primary,
  },
});

const CartMenu = StackNavigator({
  Cart: {
    screen: Cart,
  },
}, {
  initialRouteName: 'Cart',
  navigationOptions: {
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
    headerStyle: {
      backgroundColor: colors.white,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.primary,
  },
});

const Router = TabNavigator({
  Main: {
    screen: Main,
  },
  CartMenu: {
    screen: CartMenu,
  },
}, {
  initialRouteName: 'Main',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: colors.primary,
    inactiveTintColor: colors.light,
    style: {
      backgroundColor: colors.white,
    },
  },
});

export default Router;
