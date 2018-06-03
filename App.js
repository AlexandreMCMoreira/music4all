import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home2 from './screens/Login.js';
import DetailsScreen from './screens/details.js';
import Upload from './screens/upload.js';
import Menu1234 from './screens/testehome.js';
import Register from './screens/register.js';
import ListScreen123 from './screens/stream.js';
import Online from './screens/online.js';
import Download from './screens/download.js';


const Screens = createStackNavigator(
  {
    Home: {
      screen: Home2,
    },
    
    Upload2: {
      screen: Upload,
    },

    Details: {
      screen: DetailsScreen,
    },
    
    teste: {
      screen: Menu1234,
    },
    registar: {
      screen:Register,
    },
    playoff: {
      screen:ListScreen123,
    },
    playon: {
      screen:Online,
    },
    download123: {
      screen:Download,
    },
    


  },
  {
    initialRouteName: 'Home',
  },

  
);

export default class App extends React.Component {
  render() {
    return <Screens />;
  }
}