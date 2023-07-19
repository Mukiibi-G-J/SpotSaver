import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';

import {COLORS} from '../../consts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapComponents from '../components/MapComponents';
import promptForEnableLocation from '../../Global/promptForEnableLoaction';
import {parkingAround} from '../../Global/data';
import {DestinationContext, OriginContext} from '../../context/contexts';

import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
// } from '@gorhom/bottom-sheet'

import {useNavigation} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import BottomSheetMY from '../components/BottomSheet';
import calculateShortestDistance from '../../Global/getShortestDistance';

export default function FindParkingScreen({navigation, route}) {
  console.log(route);
  const {origin, dispatchOrigin} = React.useContext(OriginContext);
  const {destination, dispatchDestination} =
    React.useContext(DestinationContext);
  const [userOrigin, setUserOrigin] = React.useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });
  // const navigation = useNavigation();
  const [userDestination, setUserDestination] = React.useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });
  React.useEffect(() => {
    setUserOrigin({latitude: origin.latitude, longitude: origin.longitude});
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
      number: destination.number,
    });

    promptForEnableLocation();
  }, [origin, destination, promptForEnableLocation()]);

  const getCurrentUserCoordinates = () => {
    // Request location permission for Android
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // If permission granted, get current location
            Geolocation.getCurrentPosition(
              position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                // Do something with the latitude and longitude

                console.log('origin');
                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);

                dispatchOrigin({
                  type: 'ADD_ORIGIN',
                  payload: {
                    latitude: latitude,
                    longitude: longitude,
                  },
                });
                console.log(origin);
                calculateShortestDistance(
                  origin,
                  parkingAround,
                  dispatchDestination,
                );
              },
              error => {
                // Handle error
                console.log('Error:', error);
              },
              {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
            );
          } else {
            // Permission denied
            console.log('Location permission denied');
          }
        })
        .catch(error => {
          // Handle error
          console.log('Error:', error);
        });
    } else {
      // For iOS, directly get current location
      Geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // Do something with the latitude and longitude
        },
        error => {
          // Handle error
          console.log('Error:', error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: COLORS.white,

          //   marginBottom: 50,
          width: 799,
        }}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color={COLORS.dark} />
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.view4}>
          <View>
            <Image
              style={styles.image1}
              source={require('../../assets/transit.png')}
            />
          </View>
          <View sytle={styles.view11}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DestinationScreen')}>
                <View style={styles.view6}>
                  <Text style={styles.text1}>From where</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => getCurrentUserCoordinates()}>
                <View>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/current_location2.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.view7}>
              <TouchableOpacity>
                <View style={styles.view5}>
                  <Text style={styles.text10}>...</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.view8}>
                <Icon
                  type="material-community"
                  name="add"
                  color={COLORS.dark}
                  size={25}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

  
        <MapComponents
          parkingAround={parkingAround}
          userOrigin={userOrigin}
          userDestination={userDestination}
        />

      <BottomSheetMY route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // paddingTop: 36,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    position: 'absolute',
    top: 3,
    left: 10,
    backgroundColor: COLORS.grey6,
    borderRadius: 50,
    padding: 10,
  },
  view2: {
    height: 736 * 0.21,
    // alignItems: 'center',
    zIndex: 5,
    backgroundColor: COLORS.white,
    marginTop: 0,
  },
  view4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view5: {
    backgroundColor: COLORS.grey7,
    width: 390 * 0.7,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },

  view6: {
    backgroundColor: COLORS.grey6,
    width: 390 * 0.7,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 0,
  },
  text1: {
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.grey1,
  },

  image1: {height: 70, width: 30, marginRight: 10, marginTop: 10},
  view7: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view8: {
    marginLeft: 10,
  },
  view10: {
    alignItems: 'center',
    flex: 5,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: COLORS.grey5,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  text10: {color: COLORS.grey2, paddingLeft: 10},
});
