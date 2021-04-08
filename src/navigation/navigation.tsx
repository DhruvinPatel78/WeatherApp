import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Color from '../common/color/color';
import { RootStackParamList } from './PropType';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';

const Stack = createStackNavigator<RootStackParamList>();

const defaultNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Color.primaryColor,
    elevation: 0,
  },
  headerTitleStyle: {
    fontFamily: 'Roboto-Regular',
  },
  headerTitle: 'WeatherApp',
  headerBackTitle: 'Back',
  headerTintColor: Color.whiteColor,
  headerTitleAlign: 'center',
  headerShown: true,
};

const Navigation: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
