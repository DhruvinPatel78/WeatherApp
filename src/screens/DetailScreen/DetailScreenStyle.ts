import { StyleSheet } from 'react-native';
import { CommonStyle } from '../../common/style/style';
import constant from '../../common/constant/constant';
import { width, height } from '../../common/helper/helper';
import color from '../../common/color/color';

const Style = StyleSheet.create({
  container: {
    ...CommonStyle.container,
  },
  map: {
    width,
    height: height * 0.5,
  },
  detailContainer: {
    padding: constant.standardGapLarge,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  detail: {
    flex: 1,
  },
  cityName: {
    fontWeight: 'bold',
    fontSize: constant.fontSizeBig,
    marginBottom: constant.standardGapTiny,
  },
  cityDetail: {
    fontSize: constant.fontSizeRegular,
    marginBottom: constant.standardGapTiny,
  },
  tempDetail: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: constant.standardGapTiny,
    alignItems: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
  },
  temp: {
    fontSize: constant.fontSizeLargest,
    color: color.fontDark,
  },
  tempIcon: {
    borderWidth: 1,
    color: color.fontDark,
    height: 8,
    width: 8,
    borderRadius: 4,
    marginRight: constant.standardGapTiniest,
  },
  tempIconSmall: {
    borderWidth: 1,
    color: color.fontDark,
    height: 6,
    width: 6,
    borderRadius: 3,
    marginRight: constant.standardGapTiniest,
  },
});

export default Style;
