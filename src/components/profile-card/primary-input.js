import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as SVG from '../../assets/svgs/index';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
import colors from '../../services/colors';
import Medium from '../../presentation/typography/medium-text';
const ProfileCard = ({
  placeHolder = 'Enter Name',
  leftIcon = '',
  value = '',
  inputType = 'default',
  rightIcon = '',
  onChange,
  style,
  isPassword = false,
  bWidth = 0,
  onRightIconClick,
  readonly = true,
  title,

}) => {
  const LeftIcon = SVG[leftIcon];
  const RightIcon = SVG[rightIcon];
  const [width, setWidth] = React.useState(0);
  return (
    <Row style={{...styles.container, borderWidth: width, ...style}}>
      {LeftIcon && <LeftIcon width={mvs(27)} />}
      <Medium
      label={title}
     
        style={{...styles.input}}
       
      />
      {RightIcon && (
        
        <TouchableOpacity onPress={onRightIconClick}>
          <RightIcon />
        </TouchableOpacity>
       
      )}
    </Row>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: mvs(60),
    borderRadius: mvs(15),
    marginTop: mvs(20),
    ...colors.shadow,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(10),
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    paddingHorizontal: mvs(15),
    color: colors.black,
  },
});
export default ProfileCard;
