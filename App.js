/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {COLORS} from './src/consts';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import AppNavContainer from './src/views/navigation';

const Stack = createStackNavigator();
function App() {
  return (
    <AppNavContainer />
    // <NavigationContainer>
    //   <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Home" component={BottomNavigator} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <SafeAreaView>
    //   <StatusBar barStyle={'light-content'} />
    //   <View>
    //     <Text>heoodjlfajsdfkjsfk</Text>
    //     <Text>heoodjlfajsdfkjsfk</Text>

    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
