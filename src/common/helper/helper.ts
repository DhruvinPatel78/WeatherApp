import { Dimensions, Platform } from 'react-native';

export const { width, height } = Dimensions.get('screen');

export const isIOS = Platform.OS === 'ios';

export const toCamelCase = (str: string) => {
  let clone: string = str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
  return clone[0].toUpperCase() + clone.substr(1);
};

export const toCelsius = (temp: number) => (temp - 273.15).toFixed(0);

export const getRandomInt = () => Math.floor(Math.random() * 10000).toString();

export const isDay = () => {
  const hours = new Date().getHours();
  return hours >= 6 && hours <= 18;
};

export const API_KEY = 'ecf7f167ab4f2276a4042061bd89485c';
