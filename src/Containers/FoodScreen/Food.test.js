import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../../store';
import FoodScreen from './FoodScreen';
describe('Foods component', () => {
  const component = (
    <Provider store={store}>
      <FoodScreen />
    </Provider>
  );
  const {getByTestId} = render(component);

  test('Flatlist has correct key extractor', () => {
    const flatlist = getByTestId('days-list');
    const key = flatlist.props.keyExtractor(3);
    expect(key).toBe('3');
  });
});
