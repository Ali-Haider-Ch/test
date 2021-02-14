import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {styles} from './FoodScreen.style';
import {DayItem, FoodItem} from '../../Components';
import {connect} from 'react-redux';
import {getFoodsAction} from '../../Redux/FoodRedux/actions';
const FoodScreen = ({getFoods, food}) => {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedDay, setSelectedDay] = useState(1);
  const [delayedValue, setDelayedValue] = useState(500);

  useEffect(() => {
    getFoods(selectedDay);
  }, [selectedDay, getFoods]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <FlatList
            testID="days-list"
            showsHorizontalScrollIndicator={false}
            horizontal
            data={days}
            renderItem={({item}) => (
              <DayItem
                item={item}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
            )}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(item, index) => String(item)}
          />
        </View>
        {food.loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator testID="loader" color="black" />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={food.foods}
            renderItem={({item}) => (
              <FoodItem
                item={item}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                setDelayedValue={setDelayedValue}
                delayedValue={delayedValue}
              />
            )}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(item, index) => String(item.id)}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    food: state.food,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFoods: (day) => dispatch(getFoodsAction(day)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodScreen);
