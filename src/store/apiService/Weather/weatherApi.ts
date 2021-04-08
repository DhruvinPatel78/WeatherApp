import * as apiService from '../index';

/**
 * Get order data
 */
export const getCityList = () => {
  let data = {
    lat: 23.68,
    lon: 90.35,
    cnt: 50,
  };
  return apiService.get('find?', data);
};

export const getCurrentPlaceWeather = (data: { lat: number; lon: number }) => {
  return apiService.get('weather?', data);
};
