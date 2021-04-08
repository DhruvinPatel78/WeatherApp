import React, { FC } from 'react';
import { View } from 'react-native';
import Style from './SplashScreenStyle';
import CustomText from '../../components/CustomText';

const SplashScreen: FC = () => {
  return (
    <View style={Style.container}>
      <CustomText style={Style.title}>WeatherApp</CustomText>
    </View>
  );
};

export default SplashScreen;
