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
  const _map = React.useRef(1);
  React.useEffect(() => {
    promptForEnableLocation();
  }, [promptForEnableLocation()]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        <Text style={styles.title__text}>Good Morning, Joseph</Text>

        <View style={styles.our_services}>
          <Text style={styles.title__text}>Our Services</Text>
          <View style={styles.our_services_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FindParkingScreen', {state:0})}>
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
                  <Text style={styles.our_services__text}>Find Parking</Text>
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
                >
                <Image
                  source={require('../../assets/maker_.png')}
                  style={styles.parkingAround}
                  resizeMode="cover"
                  onPress={() => console.log('hello')}
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
    color: 'black',
    fontSize: 20,
    // fontWeight: 'semibold',
    // fontFamily: 'Roboto-Medium',
  },
  our_services: {
    marginTop: 70,
    paddingLeft: 8,
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
