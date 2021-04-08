import React, { FC } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { toCamelCase, toCelsius } from '../../common/helper/helper';
import Style from './DetailScreenStyle';
import CustomText from '../../components/CustomText';
import IconMatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../common/color/color';
import { width } from '../../common/helper/helper';
import { CommonStyle } from '../../common/style/style';
import { DetailScreenProps } from '../../navigation/PropType';

const DetailScreen: FC<DetailScreenProps> = ({ route }) => {

  const { selectedCity } = route.params;

  let Icon: string = '';

  switch (selectedCity.weather[0].main) {
    case 'Haze':
      Icon = 'weather-hazy';
      break;
    case 'Clear':
      Icon = 'weather-sunny';
      break;
    case 'Cloudy':
      Icon = 'weather-cloudy';
      break;
    default:
      Icon = 'weather-partly-cloudy';
      break;
  }

  return (
    <View style={Style.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={Style.map}
        region={{
          latitude: selectedCity.coord.lat,
          longitude: selectedCity.coord.lon,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: selectedCity.coord.lat,
            longitude: selectedCity.coord.lon,
          }}
          title={selectedCity.name}
          description={toCamelCase(selectedCity.weather[0].description)}
        />
      </MapView>
      <View style={Style.detailContainer}>
        <View style={Style.detail}>
          <CustomText style={Style.cityName}>{selectedCity.name}</CustomText>
          <CustomText style={Style.cityDetail}>
            {toCamelCase(selectedCity.weather[0].description)}
          </CustomText>
          <CustomText style={Style.cityDetail}>
            Humidity: {selectedCity.main.humidity}
          </CustomText>
          <CustomText style={Style.cityDetail}>
            Wind Speed: {selectedCity.main.humidity}
          </CustomText>
          <View style={CommonStyle.flexRow}>
            <CustomText style={Style.cityDetail}>
              Max. Temp.: {toCelsius(selectedCity.main.temp_max)}
            </CustomText>
            <CustomText style={Style.tempIconSmall} />
            <CustomText style={Style.cityDetail}>C</CustomText>
          </View>
          <View style={CommonStyle.flexRow}>
            <CustomText style={Style.cityDetail}>
              Min. Temp.: {toCelsius(selectedCity.main.temp_min)}
            </CustomText>
            <CustomText style={Style.tempIconSmall} />
            <CustomText style={Style.cityDetail}>C</CustomText>
          </View>
        </View>
        <View style={Style.tempDetail}>
          <View style={Style.tempContainer}>
            <CustomText style={Style.temp}>
              {toCelsius(selectedCity.main.temp)}
            </CustomText>
            <CustomText style={Style.tempIcon} />
            <CustomText style={Style.temp}>C</CustomText>
          </View>
          <IconMatCom
            name={Icon}
            color={color.primaryLightColor}
            size={width * 0.4}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
