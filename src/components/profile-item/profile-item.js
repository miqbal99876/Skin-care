import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as SVG from '../../assets/svgs/index';
import Bold from '../../presentation/typography/bold-text';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
const ProfileItem = ({
  icon = 'Bank',
  title = 'RightCaret',
  style,
  titleStyle,
  onClick,
  rightIcon = 'RightCaret',
  onRightIconClick,
  borderWidth = 0.2,
  ...props
}) => {
  const Icon = SVG[icon];
  const RightIcon = SVG[rightIcon];
  return (
    <TouchableOpacity onPress={onClick}>
      <Row
        style={{...styles.container, borderBottomWidth: borderWidth, ...style}}>
        {Icon && <Icon />}
        <Bold
          label={title}
          size={18}
          style={{...styles.textStyle, ...titleStyle}}
        />
        {RightIcon && (
          <TouchableOpacity onPress={onRightIconClick}>
            <RightIcon />
          </TouchableOpacity>
        )}
      </Row>
    </TouchableOpacity>
  );
};
export default ProfileItem;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: mvs(25),
    borderBottomWidth: 0.2,
    borderBottomColor: colors.lightgrey2,
  },
  textStyle: {
    flex: 1,
    marginHorizontal: mvs(15),
  },
});
