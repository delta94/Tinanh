import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import normalize from 'react-native-normalize';
import colors from '@constants/Colors';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '@components/CardItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '@shared/Header';

const Home = () => {
  const swiper = useRef<CardStack | null>();
  return (
    <View style={styles.homeContaier}>
      <Header />
      <View style={styles.bodyContainer}>
        <CardStack
          style={styles.cardStackContainer}
          disableBottomSwipe
          secondCardZoom={1}
          renderNoMoreCards={() => null}
          ref={(cardSwiper) => {
            swiper.current = cardSwiper;
          }}>
          {Array.from({ length: 20 }).map((_, index) => {
            return (
              <Card style={styles.cardContainer}>
                <CardItem key={index} index={index} />
              </Card>
            );
          })}
        </CardStack>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => swiper?.current?.swipeLeft()} style={[styles.circle]}>
            <Ionicons name="md-close" size={40} color={colors.mainThemeForegroundColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => swiper?.current?.swipeTop()} style={[styles.circle, styles.smallCircle]}>
            <Ionicons name="ios-star" size={30} color={colors.blue} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => swiper?.current?.swipeRight()} style={styles.circle}>
            <Ionicons name="ios-heart" size={36} color={colors.onlineMarkColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContaier: {
    flexGrow: 1,
  },
  bodyContainer: {
    flexGrow: 1,
    // backgroundColor: 'red',
  },
  cardStackContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 99,
    elevation: 99,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: normalize(10),
    paddingHorizontal: normalize(40),
    // borderWidth: 2,
    justifyContent: 'space-between',
  },
  circle: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // padding: normalize(10),
  },
  smallCircle: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    alignSelf: 'flex-end',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
