import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as SVG from '../../assets/svgs/index';
import SemiBold from '../../presentation/typography/semibold-text';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
const PrimaryButton = ({
  title = 'Dispatch Button',
  icon = '',
  color = colors.primaryLinear,
  onClick,
  style,
  titleStyle,
  radius = 0,
  fontSize = 18,
}) => {
  const Icon = SVG[icon];
  return (
    <TouchableOpacity style={{}} onPress={onClick}>
      <LinearGradient
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 0.9}}
        colors={color}
        borderRadius
        style={{...styles.container, ...style}}>
        <Row style={{alignItems: 'center'}}>
          {Icon && <Icon />}
          <SemiBold
            size={fontSize}
            label={title}
            style={{...styles.textStyle, ...titleStyle}}
          />
        </Row>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: mvs(60),
    borderRadius: mvs(15),
    marginTop: mvs(20),
  },
  textStyle: {
    marginLeft: mvs(0),
    color: colors.white,
  },
});
export default PrimaryButton;
