import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as SVG from '../../assets/svgs/index';
import {mvs} from '../../services/metrices';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../services/colors';
import Medium from '../../presentation/typography/medium-text';
const BottomTabButton = ({
  icon = 'ParcelUnSelected',
  color = colors.primaryLinear,
  style,
  title,
  f = 1,
}) => {
  const Icon = SVG[icon];
  return (
    <View style={{alignItems: 'center', flex: f}}>
      <LinearGradient
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        colors={color}
        borderRadius
        style={{...styles.container, ...style}}>
        {Icon && <Icon />}
      </LinearGradient>
      {title && (
        <Medium
          label={title}
          size={14}
          color={colors.primary}
          style={{marginTop: mvs(10)}}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: mvs(62),
    width: mvs(63),
    borderRadius: mvs(15),
  },
  textStyle: {
    marginLeft: mvs(18),
    color: colors.white,
  },
});
export default BottomTabButton;
