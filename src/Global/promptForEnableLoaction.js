// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
// function promptForEnableLocation() {
//   RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
//     interval: 10000,
//     fastInterval: 5000,
//   })
//     .then(data => {
//       if (data === 'enabled') {
//         // Location services enabled
//         console.log('Location services enabled.');
//       } else {
//         // Keep prompting until enabled or user cancels
//         promptForEnableLocation();
//       }
//     })
//     .catch(err => {
//       // Handle errors
//       // console.error('Error:', err);
//       promptForEnableLocation();
//     });
// }
// export default promptForEnableLocation;
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const promptForEnableLocation = () => {
  // Request location permission for Android
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
      .then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // If permission granted, prompt for enabling location services
          RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
            interval: 10000,
            fastInterval: 5000,
          })
            .then(data => {
              if (data === 'enabled') {
                // Location services enabled, get current location
                getCurrentUserCoordinates();
              } else {
                // Keep prompting until enabled or user cancels
                promptForEnableLocation();
              }
            })
            .catch(err => {
              // Handle errors
              // console.error('Error2:', err);
              promptForEnableLocation();
            });
        } else {
          // Location permission denied
          console.log('Location permission denied');
          // () => promptForEnableLocation();
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
        }
      })
      .catch(error => {
        // Handle error
        console.log('Error:', error);
      });
  } else {
    // For iOS, directly get current location
    getCurrentUserCoordinates();
  }
};

const getCurrentUserCoordinates = () => {
  Geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // Do something with the latitude and longitude
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
    },
    error => {
      // Handle error
      console.log('Error1:', error);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};

export default promptForEnableLocation;
