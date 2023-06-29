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
const statusHeight = 40;

export default function FindParkingScreen({navigation}) {
  const [statusBarHeight, setStatusBarHeight] = React.useState(0);

  React.useEffect(() => {
    // Fetch the status bar height and set it in the state
    const height = StatusBar.currentHeight || 0;
    setStatusBarHeight(height);
  }, []);
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
            <TouchableOpacity
              onPress={() => navigation.navigate('DestinationScreen')}>
              <View style={styles.view6}>
                <Text style={styles.text1}>From where</Text>
              </View>
            </TouchableOpacity>
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
     
      <MapComponents />
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
