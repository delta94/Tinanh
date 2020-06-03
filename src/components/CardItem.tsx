import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import normalize from 'react-native-normalize';
import { Text } from 'native-base';
import fontSize from '@constants/fontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { calculateAge } from '@utils';

const CardItem = ({ user }) => {
  const navigation = useNavigation();
  const heroImage = user.photos['0'] && user?.photos['0'].uri;
  // const img = require();

  useEffect(() => {
    return () => {
      console.log('unmounted');
      // navigation.navigate('MatchScreen');
    };
  }, []);

  return (
    <View style={styles.cardItemContainer}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('UserDetailsScreen', { user })}
        style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: heroImage }} />
      </TouchableWithoutFeedback>

      <View style={styles.bodyContainer}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(0,0,0,0.5)', '#00000000']}
          style={styles.gradientBox}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.nameAgeText}>
            {user.displayName}, {calculateAge(user.dob.toDate())}
          </Text>
          <View style={styles.schoolTextContainer}>
            <Ionicons name="md-school" color="#ffffff" size={16} />
            <Text style={styles.schoolText}>{user.school}</Text>
          </View>
          <View style={styles.distanceTextContainer}>
            <MaterialCommunityIcons name="map-marker-outline" color="#ffffff" size={16} />
            <Text style={styles.distanceText}>5 kilometers away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  imgContainer: {
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  cardItemContainer: {
    overflow: 'hidden',
    marginTop: normalize(10),
    marginHorizontal: normalize(15),
    borderRadius: normalize(15),
    width: Dimensions.get('window').width - normalize(30),
    height: Dimensions.get('window').height - normalize(250),
    // backgroundColor: colors.mainThemeForegroundColor,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    width: '100%',
  },
  infoContainer: {
    zIndex: 2,
    width: '100%',
    position: 'absolute',
    bottom: normalize(20),
    left: normalize(15),
  },
  gradientBox: {
    width: '100%',
    height: normalize(100),
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  nameAgeText: {
    color: 'white',
    fontWeight: '600',
    fontSize: normalize(fontSize.lg),
  },
  schoolTextContainer: {
    flexDirection: 'row',
    marginTop: normalize(6),
  },
  schoolText: {
    color: 'white',
    marginLeft: normalize(10),
  },
  distanceTextContainer: {
    flexDirection: 'row',
  },
  distanceText: {
    color: 'white',
    marginLeft: normalize(10),
  },
});
