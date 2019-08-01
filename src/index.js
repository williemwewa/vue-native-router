import {
  StateUtils,
  getNavigation,

  // Navigators
  createNavigator,
  NavigationContext,
  NavigationProvider,
  NavigationConsumer,
  createSwitchNavigator,

  // Actions
  NavigationActions,
  StackActions,
  SwitchActions,

  // Routers
  StackRouter,
  TabRouter,
  SwitchRouter,
  createConfigGetter,
  getScreenForRouteName,
  validateRouteConfigMap,

  // Utils
  getActiveChildNavigationOptions,
  pathUtils,
  SceneView,

  // SwitchView
  SwitchView,

  // NavigationEvents
  NavigationEvents,

  // HOCs
  withNavigation,
  withNavigationFocus,
} from '@react-navigation/core';

import {
  createAppContainer,
  createKeyboardAwareNavigator,
  createNavigationAwareScrollable,
  withOrientation,
  ResourceSavingSceneView,
  SafeAreaView,
} from '@react-navigation/native';

import {
  createStackNavigator,
  Transitioner,
  Assets,
  Header,
  HeaderTitle,
  HeaderBackButton,
  StackGestureContext,
  StackView,
  StackViewCard,
} from 'react-navigation-stack';

import {
  createDrawerNavigator,
  DrawerActions,
  DrawerView,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';

import {
  createTabNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  BottomTabBar,
  MaterialTopTabBar,
} from 'react-navigation-tabs';

import {
  createMaterialBottomTabNavigator,
} from 'react-navigation-material-bottom-tabs'

import RouterPlugin from "./routerPlugin";

export {
  // core
  StateUtils,
  getNavigation,
  createNavigator,
  NavigationContext,
  NavigationProvider,
  NavigationConsumer,
  createSwitchNavigator,
  NavigationActions,
  StackActions,
  SwitchActions,
  StackRouter,
  TabRouter,
  SwitchRouter,
  createConfigGetter,
  getScreenForRouteName,
  validateRouteConfigMap,
  getActiveChildNavigationOptions,
  pathUtils,
  SceneView,
  SwitchView,
  NavigationEvents,
  withNavigation,
  withNavigationFocus,

  // native
  createAppContainer,
  createKeyboardAwareNavigator,
  createNavigationAwareScrollable,
  withOrientation,
  ResourceSavingSceneView,
  SafeAreaView,

  // stack
  createStackNavigator,
  Transitioner,
  Assets,
  Header,
  HeaderTitle,
  HeaderBackButton,
  StackGestureContext,
  StackView,
  StackViewCard,

  // drawer
  createDrawerNavigator,
  DrawerActions,
  DrawerView,
  DrawerItems,

  // tabs
  createTabNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createMaterialBottomTabNavigator,
  BottomTabBar,
  MaterialTopTabBar,

  // plugin
  RouterPlugin,
};
