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

const HomeScreen = ({navigation}) => {
  const mapRef = React.useRef();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        <Text style={styles.title__text}>Good Morning, Joseph</Text>

        <View style={styles.our_services}>
          <Text style={styles.title__text}>Our Services</Text>
          <View style={styles.our_services_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FindParkingScreen')}>
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
            <TouchableOpacity>
              <View style={styles.our_services__card}>
                <Text>adsfasdfasdf</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.our_services__card}>
                <Text>adsfasdfasdf</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

export default HomeScreen;
