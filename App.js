import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Chat from './Components/Chat'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Home from './Components/Home'
import Ionicons from 'react-native-ionicons'
import React, { Component } from 'react';
import _ from 'lodash'
import {View, StatusBar} from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
const TabBarComponent = props => <BottomTabBar {...props} />;

const ACTIVE_TAB_COLOR = '#69A6F7'
const INACTIVE_TAB_COLOR = '#aaa'

const headerStyles = {
  headerTintColor: '#fff',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: ACTIVE_TAB_COLOR,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  
}

const Icon = ({ name, focused }) => (
  <Ionicons
    name={name}
    size={30}
    color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
  />
)

const Buset = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        ...headerStyles,
        headerTitleAlign: 'center'
      },
    },
    Chat: Chat,
  }
)

const Binomo = createBottomTabNavigator(
  {
    TAB_HOME: {
      screen: Buset,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => <Icon name='ios-home' focused={focused} />
      }
    },
    TAB_LOGIN: {
      screen: createStackNavigator({
        Login: {
          screen: Login,
          navigationOptions: {
            title: 'Login',
            ...headerStyles
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({ focused }) => <Icon name='ios-lock' focused={focused} />
      }
    },
    TAB_PROFILE: {
      screen: createStackNavigator({
        Login: {
          screen: Profile,
          navigationOptions: {
            title: 'Profile',
            ...headerStyles
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => <Icon name='ios-person' focused={focused} />
      }
    },
  }
)



export default createAppContainer(Binomo);
