import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './HomeScreen.style';
import {FullButton} from '../../Components';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FullButton
        title="Food Items"
        onPress={() => navigation.navigate('FoodScreen')}
      />
    </SafeAreaView>
  );
};

export default Home;
