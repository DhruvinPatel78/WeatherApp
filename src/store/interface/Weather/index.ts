export interface ICoord {
  lat: number;
  lon: number;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IWeatherItemWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherItem {
  id: number;
  name: string;
  coord: ICoord;
  main: IMain;
  dt: number;
  wind: IWind;
  sys: {
    country: string;
  };
  rain: null;
  snow: null;
  clouds: {
    all: number;
  };
  weather: IWeatherItemWeather[];
}

export interface IWeatherReducer {
  /**
   * City List
   */
  weatherList: IWeatherItem[];
  /**
   * error for Weather State
   */
  error: string;
  /**
   * Loading state
   */
  loading: boolean;
}
