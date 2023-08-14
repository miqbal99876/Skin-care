import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as SVG from '../../assets/svgs/index';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
import colors from '../../services/colors';
const PrimaryInput = ({
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
  multiline,
  numberOfLines
}) => {
  const LeftIcon = SVG[leftIcon];
  const RightIcon = SVG[rightIcon];
  const [width, setWidth] = React.useState(0);
  return (
    <Row style={{...styles.container, borderWidth: width, ...style}}>
      {LeftIcon && <LeftIcon width={mvs(27)} />}
      <TextInput
      numberOfLines={numberOfLines}
        value={value}
        keyboardType={inputType}
        editable={readonly}
        placeholder={placeHolder}
        secureTextEntry={isPassword}
        onFocus={() => setWidth(1)}
        onBlur={() => setWidth(0)}
        style={{...styles.input}}
        placeholderTextColor={colors.lightgrey1}
        onChangeText={onChange}
        multiline={ multiline}
        
        
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
export default PrimaryInput;
