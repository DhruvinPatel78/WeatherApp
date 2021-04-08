import React from 'react';
import { Text } from 'react-native';
import Styles from './customTextStyle';

export const CustomText = ({ children, style, ...rest }: any) => (
  <Text style={{ ...Styles.text, ...style }} {...rest}>
    {children}
  </Text>
);

export default CustomText;
