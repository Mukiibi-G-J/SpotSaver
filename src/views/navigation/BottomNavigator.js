import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../consts';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const [selectedTab, setSelectedTab] = React.useState('HomeScreen');

  const handlePress = tabName => {
    setSelectedTab(tabName);
    // Perform any additional logic or navigation here based on the selected tab
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="home-filled"
              size={28}
              color={
                selectedTab === 'HomeScreen' ? COLORS.primary : COLORS.grey
              }
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? COLORS.primary : COLORS.grey}}>
              Home
            </Text>
          ),
        }}
        listeners={{
          tabPress: () => handlePress('HomeScreen'),
        }}
      />
      {/* <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
        listeners={{
          tabPress: () => handlePress('LocalMall'),
        }}
      /> */}
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
        listeners={{
          tabPress: () => handlePress('Search'),
        }}
      />
      {/* <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
        listeners={{
          tabPress: () => handlePress('Favorite'),
        }}
      /> */}
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="person"
              size={30}
              color={selectedTab === 'Cart' ? COLORS.primary : COLORS.grey}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? COLORS.primary : COLORS.grey}}>
              Account
            </Text>
          ),
        }}
        listeners={{
          tabPress: () => handlePress('Cart'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
