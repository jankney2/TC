/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import Home from './components/Home'
import Settings from './components/Settings'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {createBottomTabNavigator, createAppContainer} from 'react-navigation'

const TabNavigator=createBottomTabNavigator({
  Home: Home, 
  Settings:Settings
})

export default createAppContainer(TabNavigator);

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>

//       </SafeAreaView>
//     </Fragment>
//   );
// };

// export default App;
