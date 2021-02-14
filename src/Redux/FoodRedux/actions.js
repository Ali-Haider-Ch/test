import {types} from './types';

export const getFoodsActionCreator = (foods) => {
  return {
    type: types.FOODS,
    foods,
  };
};

export const getFoodsAction = (day) => async (dispatch) => {
  try {
    dispatch({type: types.FOODS_LOADING, loading: true});
    //Api call
    let foods = [];
    if (day % 2 === 0) {
      foods = [
        {id: 1, day: 2},
        {id: 2, day: 4},
        {id: 3, day: 6},
        {id: 4, day: 8},
        {id: 5, day: 10},
        {id: 6, day: 12},
        {id: 7, day: 14},
        {id: 8, day: 16},
        {id: 9, day: 18},
        {id: 10, day: 20},
      ];
    } else {
      foods = [
        {id: 1, day: 1},
        {id: 2, day: 3},
        {id: 3, day: 5},
        {id: 4, day: 7},
        {id: 5, day: 9},
        {id: 6, day: 11},
        {id: 7, day: 13},
        {id: 8, day: 15},
        {id: 9, day: 19},
        {id: 10, day: 21},
      ];
    }
    const delay = await new Promise((resolve) =>
      setTimeout(() => resolve(), 1000),
    );
    dispatch({type: types.FOODS_LOADING, loading: false});
    dispatch(getFoodsActionCreator(foods));
  } catch (error) {
    dispatch({type: types.FOODS_LOADING, loading: false});

    if (error.message === 'Network Error') {
      dispatch({
        type: types.NETWORK_ERROR,
        error: error.message,
      });
    } else {
      dispatch({
        type: types.NETWORK_ERROR,
        error: 'Unknown Error',
      });
    }
  }
};
