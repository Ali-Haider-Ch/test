import {types} from './types';
/**
 *
 * @param {*} state this is an initial state
 * @param {*} action action object contsins action type
 */

const defaultState = {
  foods: [],
  loading: false,
  error: '',
};
const foodReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FOODS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case types.FOODS:
      return {
        ...state,
        foods: action.foods,
        loading: false,
      };
    case types.NETWORK_ERROR:
      return {
        ...state,
        foods: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default foodReducer;
