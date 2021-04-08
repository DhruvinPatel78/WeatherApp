/**
 * It is root for store reducer
 */
import { combineReducers } from 'redux';
import weatherReducer from './Weather/WeatherReducer';
import { IRootReducerState } from '../../common/interface/store/reducer/Reducer';

/**
 *  Combine all reducer here
 */
export default combineReducers<IRootReducerState>({
  weatherReducer,
});
