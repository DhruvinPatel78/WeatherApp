import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {
    selectedCity: any;
  };
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;
type PeopleDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetailScreen'
>;

export type HomeScreenProps = {
  route: HomeScreenRouteProp;
  navigation: NavigationProp;
};

export type DetailScreenProps = {
  route: PeopleDetailScreenRouteProp;
  navigation: NavigationProp;
};
