import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import FindParkingScreen from '../screens/FindParkingScreen';
import BottomNavigator from './BottomNavigator';
import {COLORS} from '../../consts';
import DestinationScreen from '../screens/DestinationScreen';
import ParkingDetail from '../screens/ParkingDetail';

const CustomStackNavigator = () => {
  //   const Stack = createNativeStackNavigator();
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="FindParkingScreen" component={FindParkingScreen} />
        <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
        <Stack.Screen name="ParkingDetail" component={ParkingDetail} />
        {/* <Stack.Screen name="CartScreen" component={CartScreen} />  */}
      </Stack.Navigator>
    </>
  );
};

export default CustomStackNavigator;
