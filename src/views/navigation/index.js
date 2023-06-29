import {View, Text} from 'react-native';
import React from 'react';
import CustomStackNavigator from './HomeStackNavigator';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function AppNavContainer() {
  //   const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const [authLoaded, setAuthLoaded] = React.useState(true);
  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated ? (
            <CustomStackNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        // <NavigationContainer ref={navigationRef}>
        //   {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        // </NavigationContainer>
        <ActivityIndicator />
      )}
    </>
  );
}
