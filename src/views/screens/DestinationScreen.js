import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import {COLORS} from '../../consts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceAutocomplete from '../components/PlaceAutoComplete';
// import {Avatar, Icon, COLORS} from 'react-native-elements';
// import { parameters } from "../Global/styles";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// const SCREEN_HEIGHT = Dimensions.get("window").height;

// const SCREEN_WIDTH = Dimensions.get("window").width;
// import { GOOGLE_MAPS_APIKEY } from "@env";
export default function DestinationScreen({navigation}) {
  const textInput1 = useRef(4);
  const textInput2 = useRef(5);
  // console.log(GOOGLE_MAPS_APIKEY);
  return (
    <>
      <View style={styles.view2}>
        <View style={styles.view1}>
          <Icon
            type="material-community"
            name="chevron-left"
            color={COLORS.grey1}
            size={32}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      <PlaceAutocomplete navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: parameters.statusBarHeight,
  },

  view1: {
    position: 'absolute',
    top: 2,
    left: 12,
    backgroundColor: COLORS.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    zIndex: 10,
  },

  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    height: 30,
    zIndex: 10,
  },

  view2: {
    backgroundColor: COLORS.white,
    zIndex: 4,
    paddingBottom: 10,
    paddingTop: 10,
  },

  view24: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  flatlist: {
    marginTop: 20,
    zIndex: 17,
    elevation: 8,
  },
});

