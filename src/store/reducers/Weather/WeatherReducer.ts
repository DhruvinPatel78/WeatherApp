import { initialWeatherState } from './InitialWeatherState';
import { IAction } from '../../../common/interface/store/action/Action';
import { IWeatherReducer } from '../../interface/Weather';
import {
  CITY_LOADING_START,
  GET_CITY_LIST,
  GET_CITY_LIST_ERROR,
} from '../../actionTypes/Weather';

export default (
  state: IWeatherReducer = initialWeatherState,
  action: IAction,
): any => {
  switch (action.type) {
    case GET_CITY_LIST: {
      return {
        ...state,
        weatherList: action.payload,
        loading: false,
        error: '',
      };
    }
    case CITY_LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CITY_LIST_ERROR: {
      return {
        ...state,
        weatherList: [],
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
