import React, {useEffect, useState} from 'react';
import {Text, Image, Animated} from 'react-native';
import {styles} from './FoodItem.style';
import {Food} from '../../assets';
function FoodItem({item, delayedValue, setDelayedValue}) {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      tension: 20,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [delayedValue, 1],
  });
  return (
    <Animated.View style={[styles.card, {transform: [{translateX}]}]}>
      <Image source={Food} style={styles.image} />
      <Text style={styles.title}>Food {item.day}</Text>
    </Animated.View>
  );
}

export default FoodItem;
