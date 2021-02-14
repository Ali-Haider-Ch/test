import {combineReducers} from 'redux';
import {Reducer as foodReducer} from '../Redux/FoodRedux';
// import reducers from modules and combine here
export default combineReducers({
  food: foodReducer,
});
