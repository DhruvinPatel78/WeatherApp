import { IWeatherReducer } from '../../interface/Weather';

export const initialWeatherState: IWeatherReducer = {
  /**
   * List of City
   */
  weatherList: [],
  /**
   * error state
   */
  error: '',
  /**
   * Loading state
   */
  loading: false,
};
