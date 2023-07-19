import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from '../../Global/mapStyle';
import {parkingAround} from '../../Global/data';
import MapViewDirections from 'react-native-maps-directions';
import {COLORS} from '../../consts';
import {API_KEY} from '@env';

const MapComponents = props => {
 
  console.log(API_KEY)
  const _map = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      if (props.userDestination.latitude !== null) {
        _map.current.fitToCoordinates(
          [props.userOrigin, props.userDestination],
          {
            // edgePadding: {top: 450, right: 50, left: 50, bottom: 350},
            animated: true,
          },
        );
      }
    }, 500);
  }, [props.userDestination, props.userOrigin]);
  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // zoomControlEnabled={true}
        showsMyLocationButton={true}
        followsUserLocationButton={true}
        showsUserLocation={true}
        // customMapStyle={mapStyle}
        showsPointsOfInterest={true}
        
        >
        {props.userOrigin.latitude != null && (
          <Marker
            coordinate={props.userOrigin}
            style={{
              // backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 80,
            }}>
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerOrigin2}
              resizeMode="cover"
            />
          </Marker>
        )}
        {props.userDestination.latitude != null && (
          <Marker
            coordinate={props.userDestination}
            style={{
              // backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 80,
              // marginRight:30
            }}
            
            title={props.userDestination.name}
            >
            <Image
              source={require('../../assets/maker_.png')}
              style={styles.parkingAround}
              resizeMode="cover"
            />
            <View style={styles.parking_number_container}>
              <Text style={styles.parking_number}>
                {props.userDestination.number}
            
              </Text>
            </View>
          </Marker>
        )}

        {props.userDestination.latitude !== null && (
          <MapViewDirections
            origin={props.userOrigin}
            destination={props.userDestination}
            apikey={API_KEY}
            strokeWidth={4}
            strokeColor={COLORS.primary}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
    // marginVertical: 0,
    // width: SCREEN_WIDTH * 0.92,
  },
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#cc0',
  },
  parkingAround: {
    width: 30,
    height: 30,
  },
  parking_number_container: {
    position: 'absolute',
    bottom: 30,
    right: 4,
    backgroundColor: 'green',
    borderRadius: 10,
    // paddingHorizontal: 4,
  },
  parking_number: {
    color: 'white',
    // fontSize:10
  },
  markerOrigin2: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  markerOrigin2: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  markerDestination: {
    width: 16,
    height: 16,
  },
  parkingAround: {
    width: 48,
    height: 14,
    marginBottom: 0,
    // backgroundColor:'brown',
    padding: 20,
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

export default MapComponents;
