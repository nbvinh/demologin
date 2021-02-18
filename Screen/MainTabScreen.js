import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';


const HomeStack = createStackNavigator();
const UpdatesStack = createStackNavigator();
const Tab= createMaterialBottomTabNavigator();
const MainTabScreen = () => (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen name='Home' component={HomeStackScreen} options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={25} />
        ),
      }} />
      <Tab.Screen name='Update' component={UpdateStackScreen} options={{tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),}} />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen =({navigation})=>(
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
      <HomeStack.Screen name="HomeScreen" options={{title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            
            )
        }} component={HomeScreen} />
    </HomeStack.Navigator>
);
const UpdateStackScreen =({navigation})=>(
  <UpdatesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
  }}>
    <UpdatesStack.Screen name="Details" options={{title:'Update',
      headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
      }} component={DetailsScreen} />
  </UpdatesStack.Navigator>
);
  