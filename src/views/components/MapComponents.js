import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapComponents = () => {
  return (
    <View style={styles.container}>
      <MapView
        //   ref={_map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        zoomControlEnabled={true}
        showsMyLocationButton={true}
        followsUserLocationButton={true}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // customMapStyle={mapStyle}
      ></MapView>
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
});

export default MapComponents;
