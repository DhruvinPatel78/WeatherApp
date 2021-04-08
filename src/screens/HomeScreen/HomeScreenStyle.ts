import { StyleSheet } from 'react-native';
import { CommonStyle } from '../../common/style/style';
import color from '../../common/color/color';
import constant from '../../common/constant/constant';

const Style = StyleSheet.create({
  container: {
    ...CommonStyle.container,
    backgroundColor: color.whiteColor,
  },
  listItemContainer: {
    backgroundColor: color.whiteColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: constant.standardGapMedium,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  cityLabelContainer: {
    flex: 1,
  },
  cityLabel: {
    fontSize: constant.fontSizeNormal,
  },
  weather: {
    marginTop: constant.standardGapTiny,
    fontSize: constant.fontSizeSmall,
  },
  tempContainer: {
    flexDirection: 'row',
  },
  temp: {
    fontSize: constant.fontSizeLargest,
    color: color.fontDark,
  },
  tempIcon: {
    padding: 2,
    borderWidth: 2,
    color: color.fontDark,
    height: 8,
    width: 8,
    borderRadius: 4,
  },
  error: {
    color: color.redColor,
    fontSize: constant.fontSizeNormal,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: constant.standardGapLarge,
  },
});

export default Style;
