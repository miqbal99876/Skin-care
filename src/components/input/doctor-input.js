import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import * as SVG from '../../assets/svgs/index';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
import colors from '../../services/colors';

const DoctorInput = ({
  placeHolder = 'Enter Name',
  leftIcon = '',
  value = '',
  inputType = 'default',
  rightIcon = '',
  onChange,
  style,
  isPassword = false,
  onRightIconClick,
  readonly = true,
  multiline,
  numberOfLines,
}) => {
  const LeftIcon = SVG[leftIcon];
  const RightIcon = SVG[rightIcon];

  return (
    <View style={{...styles.container, ...style}}>
      {LeftIcon && <LeftIcon width={mvs(27)} />}
      <TextInput
        numberOfLines={numberOfLines}
        value={value}
        keyboardType={inputType}
        editable={readonly}
        placeholder={placeHolder}
        secureTextEntry={isPassword}
        style={styles.input}
        placeholderTextColor={colors.lightgrey1}
        onChangeText={onChange}
        multiline={multiline}
      />
      {RightIcon && (
        <TouchableOpacity onPress={onRightIconClick}>
          <RightIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray2,
  },
  input: {
    flex: 1,
    color: colors.black,
  },
});

export default DoctorInput;
