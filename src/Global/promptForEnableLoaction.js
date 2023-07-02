import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
function promptForEnableLocation() {
  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  })
    .then(data => {
      if (data === 'enabled') {
        // Location services enabled
        console.log('Location services enabled.');
      } else {
        // Keep prompting until enabled or user cancels
        promptForEnableLocation();
      }
    })
    .catch(err => {
      // Handle errors
      // console.error('Error:', err);
      promptForEnableLocation();
    });
}
export default promptForEnableLocation;
