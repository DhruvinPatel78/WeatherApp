import React, { FC, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { CommonStyle } from '../../common/style/style';
import CustomText from '../../components/CustomText';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesAction } from '../../store/actions/Weather';
import { IRootReducerState } from '../../common/interface/store/reducer/Reducer';
import { IWeatherItem } from '../../store/interface/Weather';
import Style from './HomeScreenStyle';
import {
  getRandomInt,
  isDay,
  toCamelCase,
  toCelsius,
} from '../../common/helper/helper';
import color from '../../common/color/color';
import AntIcon from 'react-native-vector-icons/AntDesign';
import constant from '../../common/constant/constant';
import { notificationService } from '../../common/util/NotificationService';
import { getCurrentPlaceWeather } from '../../store/apiService/Weather/weatherApi';
import Geolocation from '@react-native-community/geolocation';
import { HomeScreenProps } from '../../navigation/PropType';

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {

  const dispatch = useDispatch();

  const weatherReducer = useSelector(
    (state: IRootReducerState) => state.weatherReducer,
  );

  const fetchList = () => {
    dispatch(getCitiesAction());
  };

  const sendNotification = () => {
    Geolocation.getCurrentPosition(info => {
      const channelId = getRandomInt();
      const { latitude, longitude } = info.coords;
      getCurrentPlaceWeather({
        lat: latitude,
        lon: longitude,
      })
        .then((res: any) => {
          notificationService.createChannel(channelId);
          notificationService.createNotification(
            channelId,
            'WeatherApp',
            `Current Temperature : ${toCelsius(res.main.temp)} c`,
          );
        })
        .catch((error: Error) => console.log(error.message));
    });
  };

  useEffect(() => {
    fetchList();
    setInterval(() => {
      if (isDay()) {
        sendNotification();
      }
    }, 1000 * 60 * 5); // change notification interval.
  }, []);

  const renderCity = ({ item }: { item: IWeatherItem }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={Style.listItemContainer}
        onPress={() =>
          navigation.navigate('DetailScreen', { selectedCity: item })
        }>
        <View style={Style.cityLabelContainer}>
          <CustomText style={Style.cityLabel}>{item.name}</CustomText>
          <CustomText style={Style.weather}>
            {toCamelCase(item.weather[0].description)}
          </CustomText>
        </View>
        <View style={Style.tempContainer}>
          <CustomText style={Style.temp}>
            {toCelsius(item.main.temp)}
          </CustomText>
          <CustomText style={Style.tempIcon} />
          <CustomText style={Style.temp}>c</CustomText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={Style.container}>
      {!weatherReducer || (weatherReducer && weatherReducer.loading) ? (
        <ActivityIndicator size="large" color={color.primaryColor} />
      ) : null}
      <FlatList
        style={CommonStyle.container}
        data={weatherReducer.weatherList}
        keyExtractor={(item: IWeatherItem) => item.id.toString()}
        renderItem={renderCity}
      />
      {weatherReducer && weatherReducer.error !== '' && (
        <View style={CommonStyle.containerCentered}>
          <CustomText style={Style.error}>Hello</CustomText>
          <TouchableOpacity onPress={fetchList}>
            <AntIcon name={'reload1'} size={constant.fontSizeBig} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
