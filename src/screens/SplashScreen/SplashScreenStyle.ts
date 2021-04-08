import { StyleSheet } from 'react-native';
import { CommonStyle } from '../../common/style/style';
import color from '../../common/color/color';
import constant from '../../common/constant/constant';

const Style = StyleSheet.create({
  container: {
    ...CommonStyle.containerCentered,
    backgroundColor: color.whiteColor,
  },
  title: {
    fontSize: constant.fontSizeLargest,
    // fontWeight: 'bold',
    color: color.primaryColor,
    fontFamily: 'Roboto-Bold',
  },
});

export default Style;
