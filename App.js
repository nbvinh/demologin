/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './Screen/Splashscreen';
import SignInScreen from './Screen/SignInScreen';
import MainTabScreen from './Screen/MainTabScreen';
import CustomSidebarMenu  from './Screen/CustomSidebarMenu';
import ProfileScreen from './Screen/ProfileScreen';
import BookmarksScreen from './Screen/BookmarkScreen';
import SupportScreen from "./Screen/SupportScreen";
import SettingsScreen from "./Screen/SettingsScreen";
import RootStackScreen from './Screen/RootStackScreen';

const Drawer= createDrawerNavigator(); 
const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen/>
      {/* <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
        <Drawer.Screen name='Profile' component={ProfileScreen} />
        <Drawer.Screen name='BookmarksScreen' component={BookmarksScreen} />
        <Drawer.Screen name='Support' component={SupportScreen} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
    
  );
};



export default App;
