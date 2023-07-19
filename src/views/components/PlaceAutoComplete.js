import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import React from 'react';
import filter from 'lodash.filter';
import {COLORS} from '../../consts';
import {DestinationContext, OriginContext} from '../../context/contexts';
import {originData, parkingAround} from '../../Global/data';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {API_KEY} from '@env';
import calculateShortestDistance from '../../Global/getShortestDistance';

const PlaceAutocomplete = ({navigation}) => {
  const [destination, setDestination] = React.useState(false);
  //
  const [searchText, setSearchText] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const [searchTextParking, setSearchTextParking] = React.useState('');
  const [suggestionsParking, setSuggestionsParking] = React.useState([]);

  const {origin, dispatchOrigin} = React.useContext(OriginContext);
  const {dispatchDestination} = React.useContext(DestinationContext);

  const textInput1 = React.useRef(4);
  const textInput2 = React.useRef(5);

  // Function to handle the selection of a suggestion
  //?  ---------------------------ADD ORIGIN--------------------------------------
  // const handleSelectSuggestion = (item, navigation) => {
  //   dispatchOrigin({
  //     type: 'ADD_ORIGIN',
  //     payload: {
  //       latitude: item.latitude,
  //       longitude: item.longitude,
  //       address: item.address,
  //       name: item.name,
  //     },
  //   });
  //   setSearchText('');
  //   setSuggestions([]);
  //   setDestination(true);
  // };

  // const Conatins = ({name, latitude, longitude, address}, query) => {
  //   if (name.includes(query) || address.includes(query)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // const handelSearch = query => {
  //   setSearchText(query);

  //   const capitalizeFirstLetter = str => {
  //     if (str.length === 0) {
  //       return str; // Return the empty string if the input is empty
  //     }

  //     return str.charAt(0).toUpperCase() + str.slice(1);
  //   };

  //   const formatedQuery = capitalizeFirstLetter(query);

  //   const filteredData = filter(originData, location => {
  //     //   console.log(location,formatedQuery);
  //     return Conatins(location, formatedQuery);
  //   });
  //   console.log('my_2', filteredData);
  //   setSuggestions(filteredData);
  // };

  //?  ---------------------------ADD PARKING--------------------------------------
  const handleSelectSuggestionParking = (item, navigation) => {
    dispatchDestination({
      type: 'ADD_DESTINATION',
      payload: {
        latitude: item.latitude,
        longitude: item.longitude,
        address: item.address,
        name: item.name,
        number: item.number,
      },
    });
    setSearchTextParking('');
    setSuggestionsParking([]);
    navigationavigation.navigate('DestinationScreen', {state: 1});
  };

  const ConatinsParking = (
    {name, latitude, longitude, address, number},
    query,
  ) => {
    if (name.includes(query) || address.includes(query)) {
      return true;
    } else {
      return false;
    }
  };
  const handelSearchParking = query => {
    setSearchTextParking(query);

    const capitalizeFirstLetter = str => {
      if (str.length === 0) {
        return str; // Return the empty string if the input is empty
      }

      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const formatedQuery = capitalizeFirstLetter(query);

    const filteredData = filter(parkingAround, location => {
      //   console.log(location,formatedQuery);
      return ConatinsParking(location, formatedQuery);
    });

    setSuggestionsParking(filteredData);
  };

  // Example usage
  const startPoint = {
    latitude: -0.608321,
    longitude: 30.6605214,
  };

  
  // React.useEffect(() => {
  //   console.log('origin', origin);
  //   console.log('destination_1', destination);
  // });
  // const nearestParking = calculateShortestDistance(origin);
  // console.log('nearesParking', nearestParking);

  return (
    <>
      {destination === false && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="From..."
          placeholderTextColor="red"
          listViewDisplayed="auto"
          debounce={400}
          // currentLocation={true}
          ref={textInput1}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          query={{
            key: API_KEY,
            language: 'en',
            components: 'country:ug',
          }}
          onPress={(data, details = null) => {
            dispatchOrigin({
              type: 'ADD_ORIGIN',
              payload: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                address: details.formatted_address,
                name: details.name,
              },
            });

            setDestination(true);
          }}
        />
      )}
      {destination === true && (
        <View style={{flex: 1}}>
          <View style={{paddingHorizontal: 25}}>
            <TextInput
              style={styles.text_input}
              placeholder="Search for Parking"
              value={searchTextParking}
              onChangeText={query => handelSearchParking(query)}
              placeholderTextColor={COLORS.dark}
              // onEndEditing={filterSuggestions}
            />
          </View>
          <View style={styles.flatlist_container}>
            <FlatList
              data={suggestionsParking}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    handleSelectSuggestionParking(item, navigation);

                    // navigation.navigate('FindParkingScreen');
                  }}>
                  <Text style={styles.item}>{`${item.name} ${' '} ${
                    item.address
                  }`}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>

          <View style={{paddingHorizontal: 25}}>
            <Button
              style={{color: COLORS.dark}}
              title="Navigate to Nearest Parking"
              onPress={() => calculateShortestDistance(origin, parkingAround,dispatchDestination, navigation)}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default PlaceAutocomplete;

styles = StyleSheet.create({
  text_input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'black',
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: COLORS.grey6,
  },
  flatlist_container: {
    paddingLeft: 30,
    marginTop: 10,
  },
  item: {
    color: 'black',
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: 'semibold',
  },
});

const autoComplete = {
  textInput: {
    color: 'black',
    backgroundColor: COLORS.grey6,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 12,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: COLORS.white,
  },

  textInputContainer: {
    flexDirection: 'row',
  },

  // container: {
  //   flex: 1,
  // },
  // textInput: {
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   borderRadius: 5,
  //   padding: 10,
  // },
  listView: {
    backgroundColor: 'white',
  },
  suggestion: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  description: {
    color: 'black',
  },
};
