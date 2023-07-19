import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../consts';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ParkingDetail = ({route, navigation}) => {
  const {name, param2} = route.params;
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color={COLORS.dark} />
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={styles.details_container}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{color: COLORS.dark, fontSize: 20}}>Name:</Text>
          <Text style={{color: COLORS.dark, fontSize: 18}}>{name}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text>Location:</Text>
          <Text style={{color: COLORS.dark, fontSize: 20}}>{name}</Text>
        </View>
        <View>
          <Text>Location:</Text>
          <Text style={{color: COLORS.dark, fontSize: 20}}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details_container: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    zIndex: 100,

    padding: 20,
    //box shadow
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
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 4,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 50,
  },
});

export default ParkingDetail;
