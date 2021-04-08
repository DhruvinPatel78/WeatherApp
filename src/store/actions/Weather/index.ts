import {
  CITY_LOADING_START,
  GET_CITY_LIST,
  GET_CITY_LIST_ERROR,
} from '../../actionTypes/Weather';
import { getCityList } from '../../apiService/Weather/weatherApi';

export const getCitiesAction = () => {
  return (dispatch: any) => {
    dispatch({ type: CITY_LOADING_START });
    getCityList()
      .then((res: any) => {
        if (res.list.length > 0) {
          dispatch({
            type: GET_CITY_LIST,
            payload: res.list,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: GET_CITY_LIST_ERROR,
          payload: err.response
            ? err.response.data.message
            : 'Known error occured',
        });
      });
  };
};
