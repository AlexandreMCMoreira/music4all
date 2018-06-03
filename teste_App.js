import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/home.js';
import DetailsScreen from './screens/details.js';

const Screens = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <Screens />;
  }
}