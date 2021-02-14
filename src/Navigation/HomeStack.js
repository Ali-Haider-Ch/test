import React from 'react';
import Home from '../Containers/HomeScreen';
import FoodScreen from '../Containers/FoodScreen';
function Navigator(Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        options={{title: 'Foods'}}
        name="FoodScreen"
        component={FoodScreen}
      />
    </>
  );
}

export default Navigator;
