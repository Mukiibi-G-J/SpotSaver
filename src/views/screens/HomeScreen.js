import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {COLORS} from '../../consts';
import {SvgUri} from 'react-native-svg';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import promptForEnableLocation from '../../Global/promptForEnableLoaction';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from '../../Global/mapStyle';
import {parkingAround} from '../../Global/data';

const HomeScreen = ({navigation}) => {
  const GreetingText = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentDay = currentTime.getDay(); // Sunday: 0, Monday: 1, ...

    let greeting = '';

    if (currentHour < 12) {
      greeting = 'Good Morning';
    } else if (currentHour < 17) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
    return greeting;
  };
  const _map = React.useRef(1);
  React.useEffect(() => {
    promptForEnableLocation();
  }, [promptForEnableLocation()]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        <View style={styles.intro_card}>
          <Text style={styles.title__text}>
            {`${GreetingText()}`},
            <Text style={{fontWeight: '600', fontSize: 25}}> {''}Joseph</Text>
          </Text>

          <View style={styles.description}>
            <Text style={styles.description_text}>
              Parking Made hassle-free
            </Text>
          </View>
        </View>
        <View style={styles.our_services}>
          <Text style={styles.title__text}>Our Services</Text>
          <View style={styles.our_services_container}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FindParkingScreen', {state: 0})
              }>
              <View style={styles.our_services__card}>
                <View>
                  <Image
                    source={require('../../assets/Car.png')}
                    // style={{height: 50, width: 50, borderRadius: 25}}
                  />
                  {/* <SvgUri
                uri={require('../../assets/Car.svg')}
                width={50}
                height={50}
                borderRadius={25}
              /> */}
                </View>
                <View style={{display: 'flex', alignItems: 'center'}}>
                  <Text style={styles.our_services__text}>
                    Navigate To Parking
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.our_services__card}>
                <View>
                  <Image
                    source={require('../../assets/booking.png')}
                    style={{
                      height: 50,
                      width: 50,
                      marginLeft: 20,
                    }}
                  />
                  {/* <SvgUri
                uri={require('../../assets/Car.svg')}
                width={50}
                height={50}
                borderRadius={25}
              /> */}
                  <Text style={styles.our_services__text_book}>
                    Book Parking
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity>
              <View style={styles.our_services__card}>
                <Text>adsfasdfasdf</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.our_services__card}>
                <Text>adsfasdfasdf</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <MapView
            ref={_map}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            zoomControlEnabled={true}
            showsMyLocationButton={true}
            followsUserLocationButton={true}
            showsPointsOfInterest={true}
            initialRegion={{
              latitude: -0.6071,
              longitude: 30.6483,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {parkingAround.map((item, index) => (
              <Marker
                style={{
                  // backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                }}
                coordinate={item}
                key={index.toString()}
                title={item.name}
                onPress={() =>
                  navigation.navigate('ParkingDetail', {
                    name: item.name,
                    location: 'World',
                  })
                }>
                <Image
                  source={require('../../assets/maker_.png')}
                  style={styles.parkingAround}
                  resizeMode="cover"
                />
                <View style={styles.parking_number_container}>
                  <Text style={styles.parking_number}>{item.number}</Text>
                </View>
              </Marker>
            ))}
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: COLORS.light,
  },
  title__text: {
    color: COLORS.dark,
    fontSize: 20,
    paddingHorizontal: 20,

    // fontWeight: '500',
  },
  our_services: {
    marginTop: 20,
    paddingLeft: 8,
  },
  intro_card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    margin: 10,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  description: {
    backgroundColor: COLORS.primary,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 20,

    marginTop: 20,
    height: 80,
  },
  description_text: {
    color: COLORS.white,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  our_services_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 4,
    flexWrap: 'wrap',
    marginTop: 20,
  },
  our_services__card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  our_services__text: {
    color: 'black',
    fontSize: 15,
    marginBottom: 10,
  },
  our_services__text_book: {
    color: 'black',
    fontSize: 15,
    marginTop: 20,
  },
  parkingAround: {
    width: 48,
    height: 14,
    marginBottom: 0,
    // backgroundColor:'brown',
    padding: 20,
  },
  map: {
    height: 450,
    marginVertical: 0,
    width: '100%',
  },
  parking_number_container: {
    position: 'absolute',
    top: 15,
    right: 4,
    backgroundColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 4,
  },
  parking_number: {
    color: 'white',
    // fontSize:10
  },
});

export default HomeScreen;
