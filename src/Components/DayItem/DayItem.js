import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './DayItem.style';
function DayItem({item, setSelectedDay, selectedDay}) {
  return (
    <TouchableOpacity
      testID="day-button"
      onPress={() => setSelectedDay(item)}
      style={[
        styles.button,
        selectedDay === item ? {backgroundColor: 'green'} : null,
      ]}>
      <Text style={selectedDay === item ? {color: 'white'} : {color: 'black'}}>
        Day {item}
      </Text>
    </TouchableOpacity>
  );
}

export default DayItem;
