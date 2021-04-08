import { StyleSheet } from 'react-native';
import color from '../color/color';

export const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.whiteColor,
  },
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.whiteColor,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
