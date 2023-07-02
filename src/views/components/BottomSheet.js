import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {parkingAround} from '../../Global/data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, } from '../../consts';

const BottomSheetMY = ({route}) => {
  // ref
  const bottomsheet1 = useRef(1);

  // variables

  const snapPoints1 = useMemo(() => ['10%', '60%'], []);

  // callbacks
  const handleSheetChange1 = useCallback(index => {}, []);

  const renderFlatListItems = useCallback(
    ({item}) => (
      <View>
        <View style={styles.view10}>
          <View style={styles.view11}>
            <Icon
              type="material-community"
              name="access-time"
              color={COLORS.white}
              size={18}
            />
          </View>
          <View>
            <Text style={{fontSize: 15, color: COLORS.grey1}}>
              {item.address}
            </Text>
            <Text style={{color: COLORS.grey4}}>{item.name}</Text>
          </View>
        </View>
      </View>
    ),
    [],
  );
  // renders
  return (
    // <View style={styles.container}>
    <BottomSheet
      // ref={bottomSheetRef}
      // index={1}
      // snapPoints={snapPoints}
      // onChange={handleSheetChanges}
      style={styles.container}
      ref={bottomsheet1}
      index={route.params.state}
      snapPoints={snapPoints1}
      onChange={handleSheetChange1}>
      <BottomSheetFlatList
        keyboardShouldPersistTaps="always"
        data={parkingAround}
        keyExtractor={item => item.id}
        renderItem={renderFlatListItems}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <View style={styles.view10}>
            <View style={styles.view11}>
              <Icon
                type="material-community"
                name="star"
                color={COLORS.white}
                size={20}
              />
            </View>
            <View>
              <Text style={styles.text9}>Saved Places</Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <View>
            <View style={styles.view10}>
              <View style={styles.view11}>
                <Icon
                  type="material-community"
                  name="map"
                  color={COLORS.white}
                  size={20}
                />
              </View>
              <View>
                <Text style={styles.text9}>Set location on map</Text>
              </View>
            </View>
            <View style={styles.view10}>
              <View style={styles.view11}>
                <Icon
                  type="material-community"
                  name="skip-next"
                  color={COLORS.white}
                  size={20}
                />
              </View>
              <View>
                <Text style={styles.text9}>Enter destination later</Text>
              </View>
            </View>
          </View>
        }
      />
      {/* <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View> */}
    </BottomSheet>
    // </View> */}
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    // backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    position: 'absolute',
    top: 25,
    left: 12,
    backgroundColor: COLORS.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    zIndex: 8,
  },

  view2: {
    // height: SCREEN_HEIGHT * 0.21,
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: COLORS.white,
  },

  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    //height:30,
    zIndex: 10,
  },
  view4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view5: {
    backgroundColor: COLORS.grey7,
    // width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },
  view6: {
    backgroundColor: COLORS.grey6,
    // width: SCREEN_WIDTH * 0.7,
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
  view11: {
    backgroundColor: COLORS.grey,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 15,
  },

  contentContainer: {
    backgroundColor: 'white',
  },

  view12: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey4,
  },

  text2: {
    fontSize: 18,
    color: COLORS.grey1,
  },
  text3: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
    marginRight: 5,
  },

  text4: {color: COLORS.grey2, marginTop: 4},

  view13: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  button1: {
    height: 40,
    width: 100,
    backgroundColor: COLORS.grey6,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  button2: {
    height: 50,
    backgroundColor: COLORS.grey10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 30,
  },

  button1Text: {
    fontSize: 17,
    marginTop: -2,
    color: COLORS.black,
  },

  button2Text: {
    color: COLORS.white,
    fontSize: 23,
    marginTop: -2,
  },

  view14: {
    alignItems: 'center',
    flex: 5,
    flexDirection: 'row',
  },
  view15: {
    backgroundColor: COLORS.grey6,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },

  view16: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  text5: {
    fontSize: 12,
    color: COLORS.black,
    marginLeft: 3,
    fontWeight: 'bold',
    paddingBottom: 1,
  },

  view17: {},

  view18: {},

  view19: {flex: 1.7, alignItems: 'flex-end'},

  icon: {paddingBottom: 2},

  image2: {height: 60, width: 60},

  view20: {marginRight: 10},

  text6: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: 'bold',
  },

  view21: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
  },

  view22: {
    alignItems: 'center',
    marginBottom: -20,
  },

  sectionHeaderContainer: {
    backgroundColor: 'white',
    marginTop: 30,
    paddingLeft: 15,
  },

  text7: {
    fontSize: 28,
    color: COLORS.black,
    marginRight: 5,
  },

  text8: {
    fontSize: 15,
    color: COLORS.grey2,
    textDecorationLine: 'line-through',
  },

  button3: {
    height: 60,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
    // width: SCREEN_WIDTH - 110,
    marginBottom: 10,
  },

  view23: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardbackground,
    // elevation:10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    height: 80,
  },

  button2Image: {
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey6,
    marginBottom: 10,
  },
  text9: {fontSize: 15, color: COLORS.grey1},

  map: {
    marginVertical: 0,
    // width: SCREEN_WIDTH,
    zIndex: -1,
  },

  centeredView: {
    zIndex: 14,
  },
  modalView: {
    marginHorizontal: 20,
    marginVertical: 60,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 16,
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
  },

  text10: {color: COLORS.grey2, paddingLeft: 10},
});

export default BottomSheetMY;
